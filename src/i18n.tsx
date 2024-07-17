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
          name: "Name",
          age: "Age",
          sex: "Sex",
          about: "About",
          behaviouristCorner: "Behaviourist`s corner",
          mapInfo: "Here you can find us!",
          location: "Location",
          phoneNumber: "Phone Number",
          phoneNumberDigits: "Phone Number (9 digits)",
          fullName: "Full Name",
          message: "Message",
          send: "Send",
          messageAfterSubmitingForm: "Message has been sent!",
          back: "Back",
          dogTip1: `Dogs need regular exercise and plenty of opportunities to walk and run. Aim to take them out at least once a day to keep them fit, active and stimulated (unless your vet recommends otherwise).  Dogs are playful, sociable animals and can become distressed or bored without enough to do. Give them safe toys as well as regular opportunities to play with people or other friendly dogs.`,
          dogTip2:
            "Have a temperate area of your home with your dog’s bed or blanket, some toys, and a water bowl, where your dog feels safe and can easily take naps during the day. This can help your dog to self-soothe during stressful situations, like parties, a baby crying, or thunderstorms. If your dog was crate trained as a rescue puppy or when joining your family, keeping their crate open and available even after they no longer need it for training may provide them with a perfect place just for them that they’ll love to have.",
          catTip1:
            "If you live in a peaceful neighborhood in which you can walk without encountering loose dogs, consider buying a harness and training your cat to walk on a leash. This training takes time and patience, for both you and the cat, and it's easiest when your cat is young. Some cats can even be harnessed and tied to a stationary object to enjoy the outdoors while you are gardening nearby (but be sure to never leave your cat alone while they are tethered).",
          catTip2:
            "All indoor cats need a litter box, which should be placed in a quiet, accessible location. In a multi-level home, one box per floor is recommended. Avoid moving the box unless absolutely necessary, but if you must do so, move the box just a few inches per day. Keep in mind that cats won't use a messy, smelly litter box, so scoop solid wastes out of the box at least once a day. Dump everything, wash with a mild detergent and refill at least once a week; you can do this less frequently if using clumping litter. Don't use ammonia, deodorants or scents, especially lemon, when cleaning the litter box. ",
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
          name: "Imię",
          age: "Wiek",
          sex: "Płeć",
          about: "Opis",
          behaviouristCorner: "Kącik behawiorysty",
          mapInfo: "Tu nas znajdziesz!",
          location: "Lokalizacja",
          phoneNumber: "Numer Telefonu",
          phoneNumberDigits: "Numer Telefonu (9 znaków)",
          fullName: "Imię i Nazwisko",
          message: "Wiadomość",
          send: "Prześlij",
          messageAfterSubmitingForm: "Wiadomość została wysłana!",
          back: "Wróć",
          dogTip1:
            "Psy potrzebują regularnych ćwiczeń i wielu okazji do spacerów i biegania. Staraj się wyprowadzać je co najmniej raz dziennie, aby zapewnić im dobrą kondycję, aktywność i stymulację (chyba że weterynarz zaleci inaczej).  Psy są zabawnymi, towarzyskimi zwierzętami i mogą stać się przygnębione lub znudzone bez wystarczającej ilości zajęć. Zapewnij im bezpieczne zabawki, a także regularne okazje do zabawy z ludźmi lub innymi przyjaznymi psami.",
          dogTip2:
            "Wydziel w domu umiarkowany obszar z legowiskiem lub kocem, zabawkami i miską z wodą, w którym pies czuje się bezpiecznie i może łatwo uciąć sobie drzemkę w ciągu dnia. Może to pomóc psu w samouspokojeniu się w stresujących sytuacjach, takich jak imprezy, płacz dziecka lub burze. Jeśli Twój pies był szkolony w klatce jako szczeniak ratowniczy lub gdy dołączył do Twojej rodziny, utrzymywanie jego klatki otwartej i dostępnej nawet po tym, jak nie będzie już potrzebował jej do treningu, może zapewnić mu idealne miejsce tylko dla niego, które pokocha.",
          catTip1:
            "Jeśli mieszkasz w spokojnej okolicy, w której możesz spacerować bez napotykania luźnych psów, rozważ zakup szelek i szkolenie kota w chodzeniu na smyczy. Trening ten wymaga czasu i cierpliwości, zarówno dla ciebie, jak i kota, i jest najłatwiejszy, gdy kot jest młody. Niektóre koty można nawet zapiąć w uprząż i przywiązać do nieruchomego obiektu, aby mogły cieszyć się przebywaniem na świeżym powietrzu, podczas gdy ty zajmujesz się ogrodem w pobliżu.",
          catTip2:
            "Wszystkie koty domowe potrzebują kuwety, która powinna być umieszczona w cichym, łatwo dostępnym miejscu. W domu wielopoziomowym zaleca się jedną kuwetę na piętro. Unikaj przenoszenia kuwety, chyba że jest to konieczne, jeśli musisz to zrobić, przesuwaj ją tylko o kilka centymetrów dziennie. Należy pamiętać, że koty nie będą korzystać z brudnej, śmierdzącej kuwety, dlatego należy usuwać z niej stałe odchody co najmniej raz dziennie. Do czyszczenia kuwety nie używaj amoniaku, dezodorantów ani zapachów, zwłaszcza cytryny. ",
        },
      },
    },
  });
