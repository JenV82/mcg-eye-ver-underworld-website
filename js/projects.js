document.addEventListener("DOMContentLoaded", function () {
    // Find all project filter buttons and project cards.
    const filterButtons = document.querySelectorAll(".filter-button");
    const projectCards = document.querySelectorAll(".project-card");
    const projectCount = document.querySelector("#project-count");

    // Display projects that match the selected filter.
    function filterProjects(selectedFilter) {
        let visibleCount = 0;

        projectCards.forEach(function (card) {
            const projectStatus = card.dataset.status;

            const shouldShow =
                selectedFilter === "all" ||
                projectStatus === selectedFilter;

            card.hidden = !shouldShow;

            if (shouldShow) {
                visibleCount++;
            }
        });

        // Update the project count.
        if (projectCount) {
            const projectWord = visibleCount === 1 ? "project" : "projects";
            projectCount.textContent =
                `Showing ${visibleCount} demonstration ${projectWord}.`;
        }

        // Update the buttons to show which filter is selected.
        filterButtons.forEach(function (button) {
            const isSelected = button.dataset.filter === selectedFilter;

            button.setAttribute("aria-pressed", String(isSelected));

            button.classList.toggle("button-secondary", !isSelected);
        });
    }

    // Listen for clicks on each filter button.
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterProjects(button.dataset.filter);
        });
    });
