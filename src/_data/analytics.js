import site from "./site.js";

const event = (selector, name) => ({
  selector,
  on: "click",
  vars: { event_name: name, event_category: "cta" },
});

export default {
  vars: {
    gtag_id: site.ga4Id,
    config: { [site.ga4Id]: { groups: "default" } },
  },
  triggers: {
    registerClick: event(".js-register", "sign_up_click"),
    loginClick: event(".js-login", "login_click"),
  },
};
