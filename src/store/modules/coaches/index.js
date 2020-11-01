import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: "c1",
          firstName: "Joseph",
          lastName: "Adeoye",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Joseph!",
          hourlyRate: 30
        },
        {
          id: "c2",
          firstName: "Nicky",
          lastName: "Samantha",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
