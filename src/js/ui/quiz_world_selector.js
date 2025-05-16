// This script hides the world selector if the current world is a quiz, and shows the quiz title instead.
(function() {
    function updateWorldSelectorForQuiz() {
        var world = window.RUR && RUR.CURRENT_WORLD;
        var selectWorld = document.getElementById('select-world');
        var headerChild = document.getElementById('header-child');
        var quizTitleId = 'quiz-title-label';
        var quizTitleElem = document.getElementById(quizTitleId);
        if (!headerChild) return;
        if (world && world.quiz === true) {
            // Hide the world selector
            if (selectWorld) selectWorld.style.display = 'none';
            // Show the quiz title
            var title = 'Quiz';
            if (typeof world.quizName === 'string' && world.quizName.trim().length > 0) {
                title = world.quizName;
            } else if (Array.isArray(world.description) && world.description.length > 0) {
                // Fallback: Try to extract a title from the description
                var match = world.description[0].match(/<h1>(.*?)<\/h1>/i);
                if (match) title = match[1];
            }
            if (!quizTitleElem) {
                quizTitleElem = document.createElement('span');
                quizTitleElem.id = quizTitleId;
                headerChild.insertBefore(quizTitleElem, headerChild.firstChild);
            }
            quizTitleElem.textContent = title;
        } else {
            // Show the world selector
            if (selectWorld) selectWorld.style.display = '';
            if (quizTitleElem) quizTitleElem.remove();
        }
    }
    function patchImportWorldWhenReady() {
        if (window.RUR && RUR.world_utils && typeof RUR.world_utils.import_world === 'function') {
            var origImportWorld = RUR.world_utils.import_world;
            if (!RUR.world_utils._quiz_patch_applied) {
                RUR.world_utils.import_world = function() {
                    var result = origImportWorld.apply(this, arguments);
                    setTimeout(updateWorldSelectorForQuiz, 0);
                    return result;
                };
                RUR.world_utils._quiz_patch_applied = true;
            }
            // Also run on DOMContentLoaded in case a world is already loaded
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateWorldSelectorForQuiz);
            } else {
                updateWorldSelectorForQuiz();
            }
        } else {
            setTimeout(patchImportWorldWhenReady, 50);
        }
    }
    patchImportWorldWhenReady();
})();
