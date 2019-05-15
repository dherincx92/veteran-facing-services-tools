// Mock for window.matchMedia
import '../../matchMedia.mock';

document.body.innerHTML = `
<div>
<!-- Begin mobile toggle button -->
<button type="button" class="va-btn-sidebarnav-trigger" aria-controls="va-detailpage-sidebar">
  <span>
    <b>More in this section</b>
    <svg xmlns="http://www.w3.org/2000/svg" width="444.819" height="444.819" viewBox="0 0 444.819 444.819"><path fill="#ffffff" d="M352.025 196.712L165.885 10.848C159.028 3.615 150.468 0 140.185 0s-18.84 3.62-25.696 10.848l-21.7 21.416c-7.045 7.043-10.567 15.604-10.567 25.692 0 9.897 3.52 18.56 10.566 25.98L231.544 222.41 92.785 361.168c-7.04 7.043-10.563 15.604-10.563 25.693 0 9.9 3.52 18.566 10.564 25.98l21.7 21.417c7.043 7.043 15.612 10.564 25.697 10.564 10.09 0 18.656-3.52 25.697-10.564L352.025 248.39c7.046-7.423 10.57-16.084 10.57-25.98.002-10.09-3.524-18.655-10.57-25.698z"></path></svg>
  </span>
</button>
<!-- End mobile toggle button -->

<div class="medium-screen:vads-u-display--flex">
  <div class="medium-screen:vads-l-col--3">
    <!-- Begin Sidenav -->
    <nav class="va-sidebarnav vads-u-width--full" id="va-detailpage-sidebar">
      <div>
        <button type="button" aria-label="Close this menu" class="va-btn-close-icon va-sidebarnav-close"></button>
        <div class="left-side-nav-title">
          <h4>Section title</h4>
        </div>
        <ul class="usa-accordion">
          <li>
            <button class="usa-accordion-button" aria-expanded="false" aria-controls="a1">
              Nav section
            </button>
            <div id="a1" class="usa-accordion-content" aria-hidden="true">
              <ul class="usa-sidenav-list">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button class="usa-accordion-button" aria-expanded="true" aria-controls="a2">
              Second nav section
            </button>
            <div id="a2" class="usa-accordion-content" aria-hidden="false">
              <ul class="usa-sidenav-list">
                <li>
                  <a href="#">Link</a>
                </li>
                <li class="active-level">
                  <a class="usa-current" href="#">Current section</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button class="usa-accordion-button" aria-expanded="false" aria-controls="a3">
              Third nav section
            </button>
            <div id="a3" class="usa-accordion-content" aria-hidden="true">
              <ul class="usa-sidenav-list">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <script type="text/javascript">
        var mobileMediaQuery = window.matchMedia('(max-width: 767px)');
        var element = document.getElementsByClassName("va-btn-sidebarnav-trigger")[0];
        var offset;

        if (mobileMediaQuery.matches) {
          offset = element.offsetTop;
        }

        window.addEventListener("resize", function() {
          if (mobileMediaQuery.matches) {
            offset = element.offsetTop;
          }
        }, false);

        window.addEventListener("scroll", function() {
          if (mobileMediaQuery.matches) {
            if (offset < window.pageYOffset) {
              element.classList.add("fixed-trigger");
            } else {
              element.classList.remove("fixed-trigger");
            }
          }
        }, false);
    </script>
    <!-- End Sidenav -->
  </div>
  <div class="medium-screen:vads-l-col--9">
    <div class="vads-u-padding-x--2 medium-screen:vads-u-padding-x--4" style="opacity:.5">
      <h1 class="vads-u-margin-top--0">Page content would appear here.</h1>
      <p class="va-introtext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum mauris at laoreet dictum.</p>

      <p>Mauris ultrices pellentesque lobortis. Ut sed libero vitae orci maximus molestie et id justo. Donec feugiat elit sed pretium condimentum. Sed in cursus dui, eget sodales nisl. In hac habitasse platea dictumst. Fusce eu lacus in purus sodales ullamcorper scelerisque in massa. Duis venenatis, orci nec lacinia dictum, nisl eros lobortis sapien, vel pharetra nisi nulla quis tortor.  </p>

      <p>Mauris ultrices pellentesque lobortis. Ut sed libero vitae orci maximus molestie et id justo. Donec feugiat elit sed pretium condimentum. Sed in cursus dui, eget sodales nisl. In hac habitasse platea dictumst. Fusce eu lacus in purus sodales ullamcorper scelerisque in massa. Duis venenatis, orci nec lacinia dictum, nisl eros lobortis sapien, vel pharetra nisi nulla quis tortor.  </p>

      <p>Mauris ultrices pellentesque lobortis. Ut sed libero vitae orci maximus molestie et id justo. Donec feugiat elit sed pretium condimentum. Sed in cursus dui, eget sodales nisl. In hac habitasse platea dictumst. Fusce eu lacus in purus sodales ullamcorper scelerisque in massa. Duis venenatis, orci nec lacinia dictum, nisl eros lobortis sapien, vel pharetra nisi nulla quis tortor.  </p>

    </div>
  </div>
</div>
`;

require('../../../js');

describe('Sidenav', () => {
  it('should show sidenav when clicking on More in this section', () => {
    global.window.innerWidth = '600px';
    const mobileSideNavButton = document.querySelector(
      '.va-btn-sidebarnav-trigger',
    );

    mobileSideNavButton.click();

    const navElement = document.querySelector('nav');

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(true);
  });

  it('should hide sidenav when clicking on close button', () => {
    global.window.innerWidth = '600px';
    const navElement = document.querySelector('nav');

    const closeButton = navElement.querySelector('.va-btn-close-icon');

    closeButton.click();

    expect(
      navElement.classList.value.includes('va-sidebarnav--opened'),
    ).toEqual(false);
  });
});
