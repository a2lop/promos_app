export default {
    common: {
        tabs: {
            footerHome: 'Accueil',
            footerMyBooks: 'Mes livres',
            footerProfile: 'Profil',
            footerNotifications: 'Notifications',
            bookInfo: 'Info',
            bookReviews: 'Critiques',
            bookQuotes: 'Citations',
            bookSellers: 'Acheter',
            authorInfo: 'INFO',
            authorBooks: 'LIVRES',
            authorReviews: 'CRITIQUES',
            authorQuotes: 'CITATIONS',
            profileUpper: 'PROFIL',
            profileInfo: 'INFO',
            profileBooks: 'LIVRES',
            profileReviews: 'CRITIQUES',
            profileQuotes: 'CITATIONS',
            profileFriends: 'AMIS',
            discoverBooks: 'LIVRES',
            discoverReviews: 'CRITIQUES',
            discoverNewBooks: 'A PARAITRE',
            discoverReaders: 'LECTEURS',
            notifications: 'NOTIFICATIONS',
            messages: 'MESSAGES',
            friends: 'AMITIES',
            barcodeUpper: 'BARCODE',
            discover: 'DÉCOUVRIR',
            review: 'CRITIQUE',
            quote: 'CITATION',
            barcode: 'SCANNER',
            searchBooks: 'LIVRES ET AUTEURS',
            searchUsers: 'MEMBRES'
        },
        date: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans',
            jan: 'Jan',
            feb: 'Fév',
            mar: 'Mar',
            apr: 'Avr',
            may: 'Mai',
            jun: 'Jui',
            jul: 'Jui',
            aug: 'Aoû',
            sep: 'Sep',
            oct: 'Oct',
            nov: 'Nov',
            dec: 'Déc'
        },

        messages: {
            copiedToClipboard: 'Copié',

            noInternetTitle: 'Pas de connexion internet',
            noInternet:
                'Veuillez vous reconnecter à internet, ou en profiter pour aller lire un livre sentant bon le papier',

            successRegisterTitle: 'Activer le compte',
            successRegister:
                "Pour activer votre compte Babelio, validez le via l'email de confirmation que nous venons de vous envoyer",
            successRegisterOk: 'Ok',

            errorLoginTitle: 'Erreur',
            errorLogin: "L'identifiant ou email et mot de passe semblent incorrects",
            errorLoginOk: 'Ok',

            errorBabelioProblemTitle: 'Babelio a un souci',
            errorBabelioProblem: "Nous n'avons pas trouvé l'information à vous renvoyer, veuillez réessayer",
            errorBabelioProblemOk: 'Ok',

            errorUsedEmailTitle: 'Erreur',
            errorUsedEmail: 'Cette adresse email est déjà utilisée par un autre membre',
            errorUsedEmailOk: 'Ok',

            errorUsernameOrEmailTitle: 'Erreur',
            errorUsernameOrEmail: 'Cet identifiant ou cet email sont déjà utilisées par un autre membre',
            errorUsernameOrEmailOk: 'Ok',

            errorFbLoginTitle: 'Erreur',
            errorFbLogin: "Vous n'avez pas accordé l'autorisation de connexion à Babelio via Facebook",
            errorFbLoginOk: 'Ok',

            errorIsPrivateProfileTitle: 'Profil privé',
            errorIsPrivateProfile: "c'est un profil privé",
            errorIsPrivateProfileOk: 'Ok',

            errorNotSamePasswordsTitle: 'Erreur',
            errorNotSamePasswords: 'Les mots de passe saisis sont différents',
            errorNotSamePasswordsOk: 'Ok',

            errorIncorrectEmailTitle: 'Erreur',
            errorIncorrectEmail: 'Cette adresse email est incorrecte',
            errorIncorrectEmailOk: 'Ok',

            errorIncorrectUsernameTitle: 'Erreur',
            errorIncorrectUsername:
                'Veuillez choisir un identifiant ne contenant que des lettres et des chiffres, sans espace ou caractères spéciaux',
            errorIncorrectUsernameOk: 'Ok',

            errorIncorrectPasswordTitle: 'Erreur',
            errorIncorrectPassword: 'Mot de passe de 5 caractères minimum',
            errorIncorrectPasswordOk: 'Ok'
        },
        buttons: {
            ok: 'Ok'
        },
        other: {
            howManyUsersLike: '{{likes}} apprécie',
            howManyUsersLikePlural: '{{likes}} apprécient',
            spoilerTag: 'masquer',
            revealSpoiler: 'dévoiler le texte masqué'
        },
        lblReadMore: 'Voir plus'
    },
    login: {
        phUsername: 'Identifiant ou email',
        phPassword: 'Mot de passe',
        connect: 'Connexion',
        connectFb: 'Connexion',
        createAccount: 'Créer un compte',
        changeLanguage: 'Español',
        fbLinkToBabelioAccount:
            "Vous avez déjà un compte Babelio, connectez-vous normalement cette fois-ci avec {{username}} pour l'associer à votre compte Facebook",
        registerWithFb: 'Finalisez votre inscription pour pouvoir vous connecter par Facebook',
        fbWithoutEmail:
            "Nous n'avons pas pu récupérer votre adresse email, créez un compte normalement, vous pourrez vous connecter via Facebook par la suite",
        forgetedPassword: 'Mot de passe oublié'
    },
    createAccount: {
        phUsername: "Nom d'utilisateur",
        phEmail: 'Email',
        phPassword: 'Mot de passe',
        phPasswordConfirm: 'Confirmer le mot de passe',
        newsletter: "Je m'inscris à la newsletter",
        createAccount: "JE M'INSCRIS",
        alreadyHasAccount: "J'ai déjà un compte Babelio"
    },
    sidebar: {
        sidebarTitle: 'MENU',
        home: 'Accueil',
        myBooks: 'Mes livres',
        wishlist: 'Pense-bête',
        profile: 'Profil',
        friends: 'Amis',
        messages: 'Messages',
        discover: 'Découvrir',
        scanner: 'Scanner',
        contactUs: 'Contactez-nous',
        contactUsLink: 'https://babelio.freshdesk.com/',
        recommendApp: "Recommandez l'application",
        changeLanguage: 'Español',
        logout: 'DÉCONNEXION',
        shareApp:
            "Rejoins-moi sur l'application Babelio, pour découvrir mes livres, gérer ta bibliothèque et partager avec d'autres lecteurs tes découvertes. Pour android : https://play.google.com/store/apps/details?id=com.babelio.babelio, Pour iphone : https://itunes.apple.com/fr/app/babelio/id1449315145",
        shareAppTitle: "Rejoins-moi sur l'application Babelio",
        openWebsite: 'Accéder au site web',
        linkPrix: 'Prix Babelio 2019',
        txtShareApp:
            "Rejoins-moi sur l'application Babelio, pour découvrir mes livres, gérer ta bibliothèque et partager avec d'autres lecteurs tes découvertes. Pour android : https://play.google.com/store/apps/details?id=com.babelio.babelio, Pour iphone : https://itunes.apple.com/fr/app/babelio/id1449315145",
        txtShareAppTitle: "Rejoins-moi sur l'application Babelio",
        recommendedBooks: 'Recommandations'
    },
    home: {
        inviteStoreTitle: 'Message',
        inviteStoreAndroid: "Est-ce que vous appréciez l'application Babelio ?",
        inviteStoreIos: 'Si vous aimez notre application, donnez-nous votre avis !',
        whyNotLikeApp: 'Que pourrions-nous améliorer ?',
        feedbackNoButton: 'Non',
        feedbackYesButton: 'Oui, notez-la'
    },
    newsFeed: {
        friendlikedquote: ' a apprécié une citation de ',
        friendlikedreview: ' a apprécié une critique de ',
        friendpublishedquote: ' a publié une citation',
        friendpublishedreview: ' a publié une nouvelle critique',
        quoteonyourbook: 'Nouvelle citation sur un de vos livres par ',
        reviewonyourbook: 'Une nouvelle critique sur un de vos livres par ',
        friendaddedbook: ' a ajouté à ses livres ',
        friendaddedbookWishlist: ' a ajouté à son ',
        friendaddedbooks: ' a ajouté {{numberBooks}} livres à ses livres ',
        friendaddedbooksToRead: ' a ajouté {{numberBooks}} livres à ses livres ',
        friendaddedbooksReading: ' a ajouté {{numberBooks}} livres à ses livres ',
        friendaddedbooksWishlist: ' a ajouté {{numberBooks}} livres à son ',
        welcomeHeader: 'Bienvenue sur Babelio {{profileName}} !',
        welcomeSubheader: 'Vous retrouverez ici vos actualités littéraires personnalisées. Pour commencer : ',
        welcomeScanner: ' des livres avec le scanner de codes-barres',
        welcomeScannerLink: 'Ajouter',
        welcomeSearch: ' des livres ou des lecteurs',
        welcomeSearchLink: 'Rechercher',
        welcomeDiscover: ' les critiques et nouveautés de la semaine',
        welcomeDiscoverLink: 'Découvrir'
    },
    myBooks: {
        phSearchInMyBooks: 'Rechercher dans mes livres',
        lblAverage: 'Moyenne : ',
        lblReaders: 'Lecteurs : ',
        lblEmptyBooks: 'Ajoutez des livres pour commencer',
        lblNoResult: 'Aucun résultat',
        status: {
            read: 'Lu',
            toRead: 'À lire',
            reading: 'En cours',
            wishlist: 'Pense-bête',
            abandoned: 'Abandonné'
        },
        viewAs: 'Affichage',
        filters: 'Filtres'
    },
    filters: {
        lblOrderBy: 'Trier par : ',
        lblFilters: 'Filtres : ',
        all: 'Tous',
        reading: 'En cours',
        read: 'Lus',
        toRead: 'A lire',
        wishlist: 'Pense Bête',
        abandoned: 'Abandonnés',
        reviewed: 'Critiqués',
        allCount: 'Tous ({{number}})',
        readingCount: 'En cours ({{number}})',
        readCount: 'Lus ({{number}})',
        toReadCount: 'A lire ({{number}})',
        wishlistCount: 'Pense Bête ({{number}})',
        abandonedCount: 'Abandonnés ({{number}})',
        reviewedCount: 'Critiqués ({{number}})',
        default: 'Défaut',
        last: 'Les dernières',
        best: 'Les meilleures',
        author: 'Auteur',
        order: 'Trier',
        title: 'Titre',
        readers: 'Lecteurs',
        publishingDate: 'Parution',
        rating: 'Note',
        date: 'Date',
        latest: 'Dernières',
        mostAppreciated: 'Les plus appréciées',
        datePublished: 'Date publié',
        dateReading: 'Date de lecture',
        dateAdded: "Date d'ajout",
        alphabetically: 'Alphabétiquement',
        popularity: 'La popularité'
    },
    bookStatus: {
        read: 'Lu',
        toRead: 'À lire',
        reading: 'En cours',
        wishlist: 'Pense-bête',
        abandoned: 'Abandonné'
    },
    bookInfo: {
        lblEditor: 'Éditeur ',
        lblPublishDate: 'Publié le ',
        lblRating: 'Note moyenne : ',
        lblReaders: 'Lecteurs : ',
        lblIsbn: 'ISBN : ',
        lblMyRating: 'Noter : ',
        lblMyStatus: 'Statut : ',
        lblInitReadingDate: 'Début de lecture : ',
        lblEndReadingDate: 'Fin de lecture : ',
        lblChooseDate: 'Choisir une date',
        lblMyReview: 'Ma critique : ',
        lblModifyReview: 'Modifier',
        lblDeleteMyReview: 'Supprimer',
        lblSummary: 'Résumé : ',
        btnAddToMyBooks: 'AJOUTER À MES LIVRES',
        btnConfirmDate: 'Confirmer',
        btnCancelDate: 'Annuler',
        lblListsOfBook: 'LISTES AVEC CE LIVRE',
        lblBuy: 'Acheter {{bookTitle}} :',
        lblSimilarBooks: 'LIVRES PROCHES DE ',
        lblPressReviews: 'CRITIQUES PRESSE',
        lblReadersReviews: 'CRITIQUES DE LECTEURS',
        lblQuotes: 'CITATIONS ',
        lblEditMy: 'EDITER MA ',
        lblAddA: 'AJOUTER UNE ',
        lblReview: 'CRITIQUE',
        califications: 'notes',
        lblThisBookReaders: 'LECTEURS DE CE LIVRE',
        lblThisBookReadersViewAll: 'Voir tous',
        lblAddReview: 'Critiquer',
        lblAddQuote: 'Ajouter',
        deleteReviewTitle: 'Supprimer cette critique',
        deleteReview: 'Souhaitez-vous supprimer cette critique ?',
        btnOkDeleteReview: 'Supprimer',
        btnCancelDeleteReview: 'Annuler',
        deleteBookTitle: 'Supprimer ce livre',
        deleteBook: 'Souhaitez-vous retirer ce livre de votre bibliothèque ?',
        btnOkDeleteBook: 'Supprimer',
        btnCancelDeleteBook: 'Annuler',
        lblMyTags: 'Mes étiquettes :',
        addTags: 'Ajouter',
        draftPublish: 'Critique en brouillon : publier'
    },
    bookReviews: {
        lblEditReview: 'EDITER MA CRITIQUE',
        lblAddReview: 'AJOUTER UNE CRITIQUE',
        lblBookWithNoReviews: '0 Critiques de ce livre'
    },
    bookQuotes: {
        lblAddQuote: 'AJOUTER UNE CITATION',
        lblBookWithNoQuotes: '0 Citations sur ce livre'
    },
    bookSellers: {
        lblBuyBookFrom: 'Acheter {{bookTitle}} sur : '
    },
    bookReaders: {
        title: 'Lecteurs de : {{bookTitle}}'
    },
    authorInfo: {
        lblNationality: 'Nationalité : ',
        lblBirthdate: 'Naissance : ',
        lblDeathdate: 'Mort : ',
        lblReaders: 'Lecteurs : ',
        lblBio: 'Biographie : ',
        lblBibliography: 'BIBLIOGRAPHIE',
        lblSimilarAuthors: 'AUTEURS PROCHES DE ',
        lblLatestReviews: 'DERNIÈRES CRITIQUES'
    },
    authorReviews: {
        lblAuthorWithNoReviews: '0 critiques sur cet auteur'
    },
    authorQuotes: {
        lblAuthorWithNoQuotes: '0 citations sur cet auteur'
    },
    profileInfo: {
        lblSureToDeleteTitle: 'Retirer de mes amis',
        lblSureToDelete: 'Souhaitez-vous vraiment retirer {{readerName}} de vos amis ?',
        btnDeleteFriend: 'Retirer',
        btnCancelDeteleFriend: 'Annuler',
        lblMale: 'Homme',
        lblFemale: 'Femme',
        lblRequestSent: 'Demande envoyée',
        lblWantToBeYourFriend: '{{readerName}} souhaite être votre ami',
        lblLatestAddedBooks: 'DERNIERS LIVRES AJOUTÉS',
        lblLatestReviews: 'DERNIÈRES CRITIQUES',
        txtEmptyMyBooks: 'Pour commencer, ajoutez des livres',
        lblReaderSince: 'Lecteur inscrit le ',
        lblNoBooks: 'Aucun livre ajouté',
        lblIsPrivateProfile: 'Profil privé',
        btnDeleteFriend: 'Retirer',
        btnConfirmFriendRequest: 'Confirmer',
        btnCancel: 'Annuler',
        btnAcceptFriendRequest: 'ACCEPTER',
        btnIgnoreFriendRequest: 'IGNORER',
        txtEmptyBooks: 'Pour commencer, ajoutez des livres',
        lblBirthdate: 'Né(e) le : ',
        ignoreRequestTitle: 'Ignorer cette demande',
        ignoreRequestMessage: 'Voulez vous vraiment ignorer la demande de {{profileName}} ?',
        lblCountry: 'Pays : ',
        lblZipCode: 'Code postal : ',
        lblDescription: 'Description : ',
        emptyFriends: "Ce lecteur n'a pas encore d'amis sur Babelio",
        lblHerBadges: 'SES BADGES',
        lblMyBadges: 'MES BADGES',
        setChallenge: "Définir l'objectif",
        challengePopupTitle: 'MON DEFI DE LECTURE {{year}}',
        setChallengeTitle: 'Définir votre défi',
        challengeHowManyBooks:
            'Combien de livres souhaitez-vous lire en {{year}} ? Les livres dont la date de fin lecture est en {{year}} seront automatiquement ajoutés',
        acceptChallenge: 'Valider',
        cancelChallenge: 'Annuler',
        challengeReadedBooks: '{{readedBooks}} livres lus sur {{total}}',
        noChallenge: "Vous n'avez pas défini d'objectif de lectures cette année",
        editMyProfile: 'Modifier mon profil',
        selectPhoto: 'En chargeant une image : ',
        takePhoto: 'Prendre une photo...',
        openGallery: 'Choisir de la galerie...',
        editPhotoErrorTitle: 'Erreur',
        editPhotoError: "Nous n'avons pas pu charger cette photographie",
        editPhotoSizeError: "Assurez-vous qu'elle soit inférieure à 400 KO",
        editPhotoErrorOk: 'Accepter',
        retry: 'il y a un problème. Réessayer ?',
        hisSimilarReader: 'LECTEURS PROCHES',
        mySimilarReader: 'LECTEURS PROCHES',
        booksInCommon: 'Livres en commun'
    },
    profileBooks: { lblNoBooks: 'Aucun livre ajouté', phSearchInHisBooks: 'Chercher dans ces livres' },
    profileReviews: {
        lblNoReviews: "Aucune critique publiée pour l'instant"
    },
    profileQuotes: {
        lblNoQuotes: "Aucune citation publiée pour l'instant"
    },
    profileFriends: {
        lblNoFriends: "Vous n'avez ajouté aucun ami",
        lblNoFriendsOtherUser: "Ce lecteur n'a pas encore d'amis sur Babelio"
    },
    discoverBooks: {
        lblBabelioNews: "L'ACTUALITÉ DE BABELIO",
        lblWeekPopularBooks: 'LES PLUS POPULAIRES CETTE SEMAINE',
        lblWeekPopularReviews: 'LES PLUS CRITIQUÉS CETTE SEMAINE',
        lblPopularLists: "LISTES DE LIVRES À L'AFFICHE",
        lblBestReviewsWeek: 'MEILLEURS CRITIQUES DE LA SEMAINE'
    },
    discoverProfiles: {
        lblTheExperts: 'LES EXPERTS',
        lblBestReviewers: 'MEILLEURS CRITIQUES DE LA SEMAINE'
    },
    notifications: {
        comm_cri_1: ' a commenté votre critique de ',
        comm_cit_1: ' a commenté votre citation de ',
        comm_comm_1: ' a aussi commenté une critique de ',
        comm_cri_abo_exp_1: ' a commenté une critique de ',
        comm_cit_liv_abo_exp_1: ' a commenté une citation de ',
        app_cri_1: ' a apprécié votre critique de ',
        app_cit_liv_1: ' a apprécié votre citation de ',
        comm_cit_liv_abo_1: ' a commenté une citation de ',
        comm_cit_aut_abo_1: ' a commenté une citation de ',
        comm_cit_aut_abo_exp_1: ' a commenté une citation de ',
        comm_cit_aut_1: ' a commenté votre citation de ',
        app_cit_aut_1: ' a apprécié votre citation de ',
        comm_cri_n: 'commenté votre critique de ',
        comm_cit_n: '',
        comm_comm_n: 'aussi commenté une critique de ',
        comm_cri_abo_exp_n: ' commenté une critique de ',
        comm_cit_liv_abo_exp_n: 'commenté une citation de ',
        app_cri_n: 'apprécié votre critique de ',
        app_cit_liv_n: 'apprécié votre citation de ',
        comm_cit_liv_abo_n: "commenté une citation de '",
        comm_cit_aut_abo_n: "commenté une citation de '",
        comm_cit_aut_abo_exp_n: 'commenté une citation de ',
        comm_cit_aut_n: 'commenté votre citation de ',
        app_cit_aut_n: 'apprécié votre citation de ',
        comm_cit_liv_1: ' a commenté votre citation de ',
        comm_cit_liv_n: ' autres ont commenté votre citation de ',
        notification2Users: ' et un autre ont ',
        andNUsers: ' et {{otherUsersNumber}} autres ont ',
        lblEmptyNotifications: "Vous n'avez aucune notification"
    },

    conversation: {
        phWriteAMessage: 'Ecrire votre message'
    },
    conversations: {
        lblEmptyMessages: "Vous n'avez aucun message"
    },
    friendRequests: {
        accept: 'ACCEPTER',
        reject: 'IGNORER',
        lblEmptyFriendRequests: "Aucune demande d'ami en attente"
    },
    bookAddReview: {
        publish: 'PUBLIER',
        lblRating: 'Noter :',
        lblIndications: "Ajouter une critique (sans dévoiler l'intrigue) : ",
        saveDraft: 'Sauvegarder en tant que brouillon',
        phSpoilerAddReview: 'Pour masquer les parties dévoilant l’intrigue : [masquer] texte à masquer [/masquer]'
    },
    bookAddQuote: {
        publish: 'PUBLIER',
        lblIndications: 'Ajouter une citation (sans guillemets) : '
    },
    profileSimple: {
        lblReviews: 'critiques',
        viewAll: 'Voir tous'
    },
    share: {
        bookDialogTitle: 'Partagez ce livre',
        bookText: 'Un livre à découvrir sur Babelio : {{bookTitle}} de {{author}} \n\n {{url}} \n\n {{text}}',
        bookTitle: 'Un livre à découvrir sur Babelio : {{bookTitle}} de {{author}}',
        authorDialogTitle: 'Partagez cet auteur',
        authorText: 'Un auteur à découvrir sur Babelio : {{author}} \n\n {{url}} \n\n {{text}}',
        authorTitle: 'Un auteur à découvrir sur Babelio : {{author}}',
        reviewText: 'Une critique à découvrir sur Babelio : {{bookTitle}} de {{author}} \n\n {{url}} \n\n {{text}}',
        reviewTitle: 'Une critique à découvrir sur Babelio : {{bookTitle}} de {{author}}',
        reviewDialogTitle: 'Partagez cette critique',
        quoteText: 'Une citation à découvrir sur Babelio : {{bookOrAuthor}} \n\n {{url}} \n\n {{text}}',
        quoteTitle: 'Une citation à découvrir sur Babelio : {{bookOrAuthor}}',
        quoteDialogTitle: 'Partagez cette citation',
        listText: 'Une liste à découvrir sur Babelio : {{listTitle}} de {{user}} \n\n {{url}} \n\n {{text}}',
        listTitle: 'Une liste à découvrir sur Babelio : {{listTitle}} de {{user}}',
        listDialogTitle: 'Partagez cette liste'
    },
    searchBooks: {
        addToMyBooks: 'AJOUTER À MES LIVRES',
        alreadyInMyBooks: 'DANS MES LIVRES',
        phSearch: 'Rechercher',
        noResults: 'Aucun résultat ne correspond à cette recherche',
        searchOnAmazon: 'Ajouter un livre ou une édition absente'
    },
    searchUsers: {
        addFriend: 'Ajouter',
        noResults: 'Aucun résultat ne correspond à cette recherche',
        lblRequestSent: 'Demande envoyée'
    },
    badgeInfo: {
        viewTitle: 'LECTEURS',
        points: 'points',
        expert: 'Expert',
        connoisseur: 'Chevronné',
        adept: 'Adepte',
        amateur: 'Amateur',
        novice: 'Novice',
        points: 'points',
        gold: 'Or',
        silver: 'Argent',
        bronze: 'bronze'
    },
    barcodeReader: {
        viewTitle: 'SCANNER',
        indications: 'Placez un code-barres dans le cadre',
        automaticAddToMyBooks: 'Ajouter automatiquement à mes livres',
        noBarcodeResultsTitle: 'Aucun résultat',
        noBarcodeResults: 'Aucun résultat ne correspond à cette recherche',
        msgAlreadyHasThisBookTitle: 'Erreur',
        msgAlreadyHasThisBook: 'vous avez déjà ce livre dans votre bibliothèque',
        msgAlreadyHasThisBookOk: 'Ok'
    },
    review: {
        viewTitle: 'CRITIQUE',
        loadCommentsPrecedents: 'Voir les commentaires précédents',
        phWriteReviewComment: 'Ecrire un commentaire (constructif)',
        btnEdit: 'Modifier',
        btnDelete: 'Supprimer',

        deleteReviewTitle: 'Supprimer cette critique',
        deleteReview: 'Souhaitez-vous supprimer cette critique ?',
        deleteReviewOk: 'Supprimer',
        deleteReviewCancel: 'Annuler'
    },
    quote: {
        viewTitle: 'CITATION',
        loadCommentsPrecedents: 'Voir les commentaires précédents',
        phWriteQuoteComment: 'Ecrire un commentaire (constructif)',
        btnEdit: 'Modifier',
        btnDelete: 'Supprimer',

        deleteQuoteTitle: 'Supprimer cette citation',
        deleteQuote: 'Souhaitez-vous supprimer cette citation ?',
        deleteQuoteOk: 'Supprimer',
        deleteQuoteCancel: 'Annuler'
    },
    userWhoLikes: {
        viewTitleReview: 'CRITIQUE',
        viewTitleQuote: 'CITATION',
        reviews: 'ILS ONT APPRÉCIÉ CETTE CRITIQUE',
        quotes: 'ILS ONT APPRÉCIÉ CETTE CITATION'
    },
    myProfileEdit: {
        viewTitle: 'Profil',
        name: 'Prénom',
        lastname: 'Nom',
        biography: 'Qui suis-je ? Que lis-je ?',
        country: 'Pays',
        postalCode: 'Code Postal',
        website: 'Blog ou site web',
        genderM: 'Homme',
        genderF: 'Femme',
        genderN: 'Sexe non renseigné',
        birthdate: 'Date de naissance',
        whoIAm: 'Quel type de lecteur êtes-vous ?',
        isAuthor: 'Auteur/écrivain',
        isReader: 'Lecteur',
        isEditor: 'Professionnel de l’édition',
        isStore: 'Bouquiniste',
        isLibrary: 'Libraire',
        isLibrarian: 'Bibliothécaire',
        isTeacher: 'Enseignant',
        isStudent: 'Etudiant',
        isDocumentalist: 'Documentaliste',
        isJournalist: 'Journaliste',
        isParent: 'Parent d’enfant(s) mineur(s)',
        isGrandparent: 'Grand-parent d’enfant(s) mineur(s)',
        isOther: 'Autre',
        openEdit: 'Modifier mon profil',
        selectPhoto: 'En chargeant une image : ',
        takePhoto: 'Prendre une photo...',
        openGallery: 'Choisir de la galerie...',
        editPhotoErrorTitle: 'Erreur',
        editPhotoError: "Nous n'avons pas pu charger cette photographie",
        editPhotoSizeError: "Assurez-vous qu'elle soit inférieure à 400 KO",
        editPhotoErrorOk: 'Accepter',
        retry: 'il y a un problème. Réessayer ?',
        btnConfirm: 'Confirmer',
        btnCancel: 'Annuler',
        subHeader: 'Modifier vos informations personelles'
    },
    list: {
        title: 'Liste',
        listCreatedBy: 'Liste créée par : ',
        listCreator: '{{readerName}} - {{books}} livres',
        phWriteListComment: 'Ecrire un commentaire',
        showAllBooks: 'Voir tous les livres de la liste'
    },
    tagsManager: {
        viewTitle: 'Ajouter des étiquettes',
        phSearchTags: 'Rechercher une étiquette',
        addedTags: 'Etiquettes ajoutées',
        suggestedTags: 'Etiquettes suggérées',
        add: 'Ajouter ',
        loadMoreTags: 'Voir plus'
    },
    tagsFilters: {
        viewTitle: 'Filtrer par étiquettes',
        phSearchTags: 'Rechercher une étiquette',
        suggestedTags: 'Etiquettes suggérées',
        loadMoreTags: 'Voir plus'
    },
    feedback: {
        whyNotLikeApp: 'Que pourrions-nous améliorer ?',
        sendFeedback: 'Envoyer'
    },
    myProfileFriends: {
        lblSureToDeleteTitle: 'Retirer de mes amis',
        lblSureToDelete: 'Souhaitez-vous vraiment retirer {{friendName}} de vos amis ?',
        btnCancelDeleteFriend: 'ANNULER',
        btnDeleteFriend: 'RETIRER'
    },
    booksInCommon: {
        viewTitle: 'LIVRES EN COMMUN'
    },
    recommendedBooks: {
        viewTitle: 'RECOMMANDATIONS',
        emptyRecommendations: 'Dites-nous les livres que vous avez aimés pour recevoir des recommandations',
        addBooks: 'Ajouter des livres à ma bibliothèque'
    }
}
