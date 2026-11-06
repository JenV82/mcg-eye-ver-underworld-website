# McG"eye"ver of the Underworld

#### Video Demo: [Video Demo](https://youtu.be/fvD8zXvl0YQ)

#### Description:

McG"eye"ver of the Underworld is a website I developed as my CS50x final project. The website represents a paranormal investigation brand focused on researching, designing, building, and field-testing custom paranormal investigation tools.

The goal of this project was to create a professional online presence for the brand while applying the web development concepts I learned throughout CS50x. I wanted to introduce the brand, share the story behind its creator, showcase experimental projects, and provide visitors with a way to learn more and make inquiries.

The website consists of four main pages:

Home (index.html): Introduces McG"eye"ver of the Underworld, its purpose, and its focus on engineering and investigating the unexplained.

Meet the Maker (about.html): Introduces the creator, shares her background and creative process, and explains the mission behind the brand.

The Workshop (workshop.html): Showcases paranormal investigation projects at different stages of development. Visitors can use interactive filtering buttons to view projects by development status, including development and field testing.

Contact (contact.html): Provides a contact interface with form fields designed to allow visitors to express interest, ask questions, and explore future collaborations. The form is currently a visual interface and is not connected to a service that processes submissions.

### Technologies

The website was built using HTML, CSS, and JavaScript.

HTML: Provides the structure and content for each of the four pages. Semantic elements organize page content and navigation.

CSS: Controls the visual presentation, including the gothic-inspired color palette, typography, page layouts, navigation, project cards, and responsive design. A shared stylesheet keeps the appearance consistent across the website.

JavaScript: Adds interactive functionality. The workshop filtering system allows visitors to display projects based on their development status. Additional JavaScript supports shared website functionality, including the automatic copyright year.

The project is organized into separate folders to keep the code and assets organized:

    -index.html, about.html, workshop.html, and contact.html contain the individual website pages.

    -css/styles.css contains the shared website styling and responsive layout rules.

    -js/script.js contains shared JavaScript functionality.

    -js/projects.js controls the interactive project filtering on the Workshop page.

    -assets/ contains the website's logo, photographs, project images, and other visual assets.

### Design Decisions

I chose a gothic-inspired visual identity using burgundy, parchment, and antique gold to complement the paranormal investigation theme. The branding incorporates an eye motif, while the overall layout balances the atmosphere of the subject matter with readability and usability.

I chose to build the website as four separate HTML pages rather than placing all of the content on one page. This allowed me to give each area of the brand its own space while maintaining consistent navigation and styling.

I also wanted the Workshop page to do more than simply display pictures. The interactive filters allow visitors to distinguish between projects in development and those undergoing field testing. This makes it easier to showcase the research and development process as the project portfolio grows.

Responsive CSS allows the website to adapt to smaller screens. During development, I tested the pages in both desktop and mobile layouts and adjusted the styling to maintain usability across screen sizes.

### How to Run

The website does not currently require a backend server or database to display its content.

To view it locally, open index.html in a web browser or run a local development server from the project directory.

### Future Improvements

Potential future enhancements include:

    -Connecting the contact form to a backend service or form provider so inquiries can actually be submitted.

    -Adding more project documentation, photographs, and field-testing results as additional devices are developed.

    -Publishing convention appearances and event announcements.

    -Exploring product listings and online sales as the brand develops.

    -Expanding the project gallery as additional investigation tools are developed and tested.

### Credits and Ackowledgements

The website was developed as part of Harvard University's CS50x course.

External resources and assets:

    Branding and photography: The McG"eye"ver of the Underworld logo, portrait photography, and photographs of the paranormal investigation devices were provided by Sandi Hughes, the maker and creator behind the brand.

    Technologies: The website uses HTML, CSS, and vanilla JavaScript without external frameworks or libraries. It uses standard system fonts rather than externally hosted fonts.

    AI assistance: I used ChatGPT as a programming learning and troubleshooting assistant during development. It helped me understand HTML, CSS, and JavaScript concepts, troubleshoot errors, and work through implementation decisions. I reviewed and tested changes as I developed the website.
