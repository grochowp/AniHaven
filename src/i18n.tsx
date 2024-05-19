import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          error: "Whoops! Something`s went wrong!",
          errorButton: "Go back",
          intro: "Rescuing Lives!",
          newsButton: "News",
          animalButton: "Animals",
          adoptionButton: "About adoption",
          contactButton: "Contact",
          dogsButton: "Dogs",
          catsButton: "Cats",
          otherAnimalsButton: "Other animals",
          shelterNumbers: "Shelter by the numbers",
          shelterNumbersWaiting: "Waiting for You",
          shelterNumbersFound: "Found home",
          shelterNumbersRescued: "Rescued",
          recentlyFound: "Recently found",
        },
      },
      pl: {
        translation: {
          error: "Upss! Coś poszło nie tak!",
          errorButton: "Wróć",
          intro: "Ratujemy Życia!",
          newsButton: "Nowości",
          animalButton: "Zwierzęta",
          adoptionButton: "O adopcji",
          contactButton: "Kontakt",
          dogsButton: "Psy",
          catsButton: "Koty",
          otherAnimalsButton: "Inne zwierzęta",
          shelterNumbers: "Schronisko w liczbach",
          shelterNumbersWaiting: "Czeka na Ciebie",
          shelterNumbersFound: "Odnalazło dom",
          shelterNumbersRescued: "Uratowanych",
          recentlyFound: "Niedawno odnalezione",
        },
      },
    },
  });
