function app() {
  const closeNav = document.querySelector("#close-nav");
  const navContainer = document.querySelector("#nav");

  //Accordions States
  const accordions = document.querySelectorAll(".items-container .card");
  const accordionTrigger = document.querySelector("#acc-trigger");
  const accordionMenu = document.querySelector("#accordion-content");
  const allAccordionItems = accordionMenu.querySelectorAll(
    '[role="accordion-item"]'
  );

  //Menu Dropdown States
  const menuTrigger = document.querySelector("#app_header-control");
  const menu = document.querySelector("#menu-content");
  const allMenuItems = menu.querySelectorAll('[role="menuitem"]');
  const mobileMenuTrigger = document.querySelector(
    "#app_header-control-mobile"
  );
  const mobileMenu = document.querySelector("#mobile-menu-content");
  const allMobileMenuItems = mobileMenu.querySelectorAll('[role="mobileitem"]');

  //Alert Dropdown States
  const alertTrigger = document.querySelector("#alert-target");
  const alertMenu = document.querySelector("#alert-content");
  const allAlertItems = alertMenu.querySelectorAll('[role="alertitem"]');
  const alertTriggerMobile = document.querySelector("#alert-target-mobile");
  const alertMenuMobile = document.querySelector("#alert-content-mobile");
  const allAlertItemsMobile = alertMenuMobile.querySelectorAll(
    '[role="alertitemMobile"]'
  );

  //Loop through all accordions items
  accordions.forEach((acc) => {
    acc.onclick = () => {
      accordions.forEach((subAcc) => {
        subAcc.classList.remove("active");
      });
      acc.classList.add("active");
    };
  });

  //Menu Functions
  const toggleMenu = () => {
    const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";
    menu.classList.toggle("menu-open");

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
    document.addEventListener("click", (e) => {
      if (!menuTrigger.contains(e.target)) {
        menu.classList.remove("menu-open");
      }
    });
  };
  const openMenu = () => {
    menuTrigger.ariaExpanded = "true";
    allMenuItems.item(0).focus();
    menu.addEventListener("keyup", handleEscape);
    allMenuItems.forEach((item, index) => {
      item.addEventListener("keyup", (event) => {
        handleMenuArrow(event, index);
      });
    });
  };
  const closeMenu = () => {
    menuTrigger.ariaExpanded = "false";
    menuTrigger.focus();
  };
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      toggleMenu();
    }
  };
  const handleMenuArrow = (e, index) => {
    const isLast = index === allMenuItems.length - 1;
    const isFirst = index === 0;
    const nextItem = allMenuItems.item(index + 1);
    const prevItem = allMenuItems.item(index - 1);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (isLast) {
        allMenuItems.item(0).focus();
        return;
      }
      nextItem.focus();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (isFirst) {
        allMenuItems.item(allMenuItems.length - 1).focus();

        return;
      }
      prevItem.focus();
    }
  };
  menuTrigger.addEventListener("click", toggleMenu);

  ///Mobile Menu Functions
  const toggleMobileMenu = () => {
    const isExpanded =
      mobileMenuTrigger.attributes["aria-expanded"].value === "true";
    mobileMenu.classList.toggle("menu-open");

    if (isExpanded) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
    document.addEventListener("click", (e) => {
      if (!mobileMenuTrigger.contains(e.target)) {
        mobileMenu.classList.remove("menu-open");
      }
    });
  };
  const openMobileMenu = () => {
    mobileMenuTrigger.ariaExpanded = "true";
    allMobileMenuItems.item(0).focus();
    mobileMenu.addEventListener("keyup", handleEscapeMobile);
    allMobileMenuItems.forEach((item, index) => {
      item.addEventListener("keyup", (event) => {
        handleMenuArrowMobile(event, index);
      });
    });
  };
  const closeMobileMenu = () => {
    mobileMenuTrigger.ariaExpanded = "false";
    mobileMenuTrigger.focus();
  };
  const handleEscapeMobile = (e) => {
    if (e.key === "Escape") {
      toggleMobileMenu();
    }
  };
  const handleMenuArrowMobile = (e, index) => {
    const isLast = index === allMobileMenuItems.length - 1;
    const isFirst = index === 0;
    const nextItem = allMobileMenuItems.item(index + 1);
    const prevItem = allMobileMenuItems.item(index - 1);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (isLast) {
        allMobileMenuItems.item(0).focus();
        return;
      }
      nextItem.focus();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (isFirst) {
        allMobileMenuItems.item(allMobileMenuItems.length - 1).focus();

        return;
      }
      prevItem.focus();
    }
  };
  mobileMenuTrigger.addEventListener("click", toggleMobileMenu);

  //Alert Functions
  const toggleAlert = () => {
    const isExpanded =
      alertTrigger.attributes["aria-expanded"].value === "true";
    alertMenu.classList.toggle("action-open");

    if (isExpanded) {
      closeAlert();
    } else {
      openAlert();
    }
    document.addEventListener("click", (e) => {
      if (!alertTrigger.contains(e.target)) {
        alertMenu.classList.remove("action-open");
      }
    });
  };
  const openAlert = () => {
    alertTrigger.ariaExpanded = "true";
    allAlertItems.item(0).focus();
    alertMenu.addEventListener("keyup", handleEscapeAlert);
    allAlertItems.forEach((item, index) => {
      item.addEventListener("keyup", (event) => {
        handleAlertArrow(event, index);
      });
    });
  };
  const closeAlert = () => {
    alertTrigger.ariaExpanded = "false";
    alertTrigger.focus();
  };
  const handleEscapeAlert = (e) => {
    if (e.key === "Escape") {
      toggleAlert();
    }
  };
  const handleAlertArrow = (e, index) => {
    const isLast = index === allAlertItems.length - 1;
    const isFirst = index === 0;
    const nextItem = allAlertItems.item(index + 1);
    const prevItem = allAlertItems.item(index - 1);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (isLast) {
        allAlertItems.item(0).focus();
        return;
      }
      nextItem.focus();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (isFirst) {
        allAlertItems.item(allAlertItems.length - 1).focus();

        return;
      }
      prevItem.focus();
    }
  };
  alertTrigger.addEventListener("click", toggleAlert);

  //Mobile Alert Functions
  const toggleAlertMobile = () => {
    const isExpanded =
      alertTriggerMobile.attributes["aria-expanded"].value === "true";
    alertMenuMobile.classList.toggle("action-open");

    if (isExpanded) {
      closeAlertMobile();
    } else {
      openAlertMobile();
    }
    document.addEventListener("click", (e) => {
      if (!alertTriggerMobile.contains(e.target)) {
        alertMenuMobile.classList.remove("action-open");
      }
    });
  };
  const openAlertMobile = () => {
    alertTriggerMobile.ariaExpanded = "true";
    allAlertItemsMobile.item(0).focus();
    alertMenuMobile.addEventListener("keyup", handleEscapeAlertMobile);
    allAlertItemsMobile.forEach((item, index) => {
      item.addEventListener("keyup", (event) => {
        handleAlertArrowMobile(event, index);
      });
    });
  };
  const closeAlertMobile = () => {
    alertTriggerMobile.ariaExpanded = "false";
    alertTriggerMobile.focus();
  };
  const handleEscapeAlertMobile = (e) => {
    if (e.key === "Escape") {
      toggleAlertMobile();
    }
  };

  const handleAlertArrowMobile = (e, index) => {
    const isLast = index === allAlertItemsMobile.length - 1;
    const isFirst = index === 0;
    const nextItem = allAlertItemsMobile.item(index + 1);
    const prevItem = allAlertItemsMobile.item(index - 1);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (isLast) {
        allAlertItemsMobile.item(0).focus();
        return;
      }
      nextItem.focus();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (isFirst) {
        allAlertItemsMobile.item(allAlertItemsMobile.length - 1).focus();

        return;
      }
      prevItem.focus();
    }
  };
  alertTriggerMobile.addEventListener("click", toggleAlertMobile);

  // Accordion Functions
  const toggleAccordion = () => {
    const isExpanded =
      accordionTrigger.attributes["aria-expanded"].value === "true";
    accordionMenu.classList.toggle("accordion-open");
    accordionTrigger.classList.toggle("opened");
    if (isExpanded) {
      closeAccordion();
    } else {
      openAccordion();
    }
  };
  const handleEscapeAccordion = (e) => {
    if (e.key === "Escape") {
      toggleAccordion();
    }
  };

  const openAccordion = () => {
    accordionTrigger.ariaExpanded = "true";
    allAccordionItems.item(0).focus();
    accordionMenu.addEventListener("keyup", handleEscapeAccordion);
    allAccordionItems.forEach((item, index) => {
      item.addEventListener("keyup", (event) => {
        handleMenuArrowAccordion(event, index);
      });
    });
  };

  const closeAccordion = () => {
    accordionTrigger.ariaExpanded = "false";
    accordionTrigger.focus();
  };
  const handleMenuArrowAccordion = (e, index) => {
    const isLast = index === allAccordionItems.length - 1;
    const isFirst = index === 0;
    const nextItem = allAccordionItems.item(index + 1);
    const prevItem = allAccordionItems.item(index - 1);

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (isLast) {
        allAccordionItems.item(0).focus();
        return;
      }
      nextItem.focus();
    }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      if (isFirst) {
        allAccordionItems.item(allAccordionItems.length - 1).focus();

        return;
      }
      prevItem.focus();
    }
  };

  accordionTrigger.addEventListener("click", toggleAccordion);
  closeNav.addEventListener("click", () => {
    navContainer.classList.add("close-nav");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progressBar = document.getElementById("progress-fill");
    let paragraph = document.getElementById("progress-count");
    let counts = null;

    const updateProgressBar = () => {
      const checkedCheckboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      const percentage = (checkedCheckboxes.length / checkboxes.length) * 100;

      progressBar.style.width = percentage + "%";
      counts = percentage / 20;
      paragraph.textContent = `${counts}/5 completed`;
    };

    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateProgressBar();
      });
    });
  });
}
app();
