export default {
    wizard: {
        title1: 'Bienvenido a Promos',
        message1: 'Encuentra los mejores descuentos en todo!!!',
        title2: '¿La promo del día?',
        message2:
            'Encuentra aqui ese descuento que estabas esperando! arma tu plan del dīa aprovechando que tu establecimiento favorito tiene una oferta para tí o simplemente descubre una irrestible oferta!!!',
        title3: 'Restaurantes, entretenimiento, ropa y mucho más',
        message3:
            'Enterante de las ofertas que día a día existen en tu ciudad, suscribete a tu establecimiento y se el primero en recibir las promociones!!!',
        next: 'Siguiente',
        begin: 'Empezar',
        skip: 'Omitir'
    },
    common: {
        tabs: {
            footerHome: 'Inicio',
            footerDiscover: 'Descubrir',
            footerProfile: 'Perfil'
        },
        days: {
            monday: 'Lunes',
            tuesday: 'Martes',
            wednesday: 'Miércoles',
            thursday: 'Jueves',
            friday: 'Viernes',
            saturday: 'Sábado',
            sunday: 'Domingo'
        },
        and: ' y '
    },
    components: {
        daySelector: {
            1: 'Lu',
            2: 'Ma',
            3: 'Mi',
            4: 'Ju',
            5: 'Vi',
            6: 'Sa',
            0: 'Do'
        }
    },
    offerDetail: {
        viewTitle: 'Detalle',
        otherOffersOf: 'Otras promociones en {{establishmentName}}'
    },
    establishment: { viewTitle: 'Establecimiento', offers: 'Promociones' },
    establishments: {
        viewTitle: 'Establecimientos',
        noEstablishments: 'No hay establecimientos 😔'
    },

    searchText: {
        viewTitle: 'Busqueda',
        noResults: 'No se encontraron resultados',
        phSearch: 'Ingresa aqui el texto a buscar'
    },
    searchCategories: { viewTitle: 'Categorias' },
    profile: {
        phEmail: 'Correo electrónico',
        phPassword: 'Contraseña',
        login: 'Iniciar sesión',
        loginFacebook: 'Iniciar sesión con Facebook',
        noAccount: '¿No tienes una cuenta? ',
        register: 'Registrate',
        or: ' O ',
        loginWith: 'Inicia con tus redes sociales:',
        phRegisterName: 'Tus nombres',
        phRegisterEmail: 'Tu correo electrónico',
        phRegisterPassword1: 'Ingresa una contraseña',
        phRegisterPassword2: 'Repite tu contraseña',
        alreadyAccount: '¿Ya tienes una cuenta?',
        backToLogin: ' Inicia sesión',
        confirmRegister: 'Registrarse',
        registerWithFacebook: 'Registrate con Facebook',
        //with session
        welcome: 'Bienvenido/a {{name}}',
        yourCategories: 'Tus categorías favoritas:',
        emptyFavoriteCategories: 'No tienes categorias favoritas aún',
        yourMemberships: 'Tus membresias y afiliaciones:',
        emptyMemberships: 'No has añadido ninguna afiliación aún',
        errorInvalidEmail: 'El correo ingresado es incorrecto',
        errorInvalidPasswordRegex:
            'La contraseña debe tener al menos 6 caracteres, entre números y letras',
        errorEmptyFields: 'Llena correctamente todos los campos',
        errorDifferentPasswords: 'Las contraseñas deben coincidir',
        errorInexistentUser: 'No existe un usuario con ese correo electrónico',
        errorInvalidPassword: 'Contraseña incorrecta',
        errorUsedEmail: 'Correo ya esta siendo usado por otra cuenta',
        errorGeneral: 'Algo salió mal, por favor vuelve a intentarlo más tarde'
    },
    sidebar: {
        home: 'Inicio',
        establishments: 'Establecimientos',
        categories: 'Categorías',
        about: 'Acerca de',
        login: 'Iniciar sesión',
        memberships: 'Tarjetas / Afiliaciones',
        birthday: '¿Es tu cumpleaños?',
        want: '¿Quieres unirte?',
        profile: 'Tu perfil',
        login: 'Iniciar sesión',
        logout: 'Cerrar sesión'
    },
    home: {
        noOffers: 'No hay promociones hoy 😔'
    },
    discover: {
        outstandingOffers: 'Promos destacadas'
    },
    memberships: {
        viewTitle: 'Membresias'
    },
    birthdayOffers: {
        viewTitle: 'Ofertas por tu cumpleaños'
    },
    popupFilter: { chooseCategory: 'Selecciona una categoria:', all: 'Todas' },
    popupMemberships: {
        chooseMembership: 'Selecciona las membresias que dispones:'
    },
    popupMyCategories: {
        chooseCategory: 'Selecciona tus categorías favoritas'
    },

    onPromos: {
        title: '¿Tienes una oferta espectacular y quieres aparecer en Promos?',
        description:
            'Somos una comunidad que todos los días busca crecer, nos alegraría muchisimo contar con tu establecimiento y oferta en nuestra guía, puedes tanto escribirnos a nuestro correo, llamarnos o simplemente enviarnos un Whatsapp a los siguientes contactos:',
        socialText: 'O escribenos mediante nuestras redes sociales:'
    },
    share: {
        dialogTitle: 'Compartir este contenido',
        offerTitle: '{{offerTitle}} en {{establishmentName}}',
        establishmentTitle: 'Ofertas en {{establishmentName}}',
        offerDescription:
            '{{establishmentName}}\n\n{{description}}.\n\nEsta y otras promociones encuentras en:\nhttps://www.facebook.com/promos.ecu\nhttps://www.instagram.com/promos.ec/',
        establishmentDescription:
            '{{description}}.\nEncuentra las ofertas de este y otros establecimientos en:\nhttps://www.facebook.com/promos.ecu\nhttps://www.instagram.com/promos.ec/'
    },
    membershipOffers: {
        noOffers: 'No hay ofertas con {{membership}}, aún...'
    }
}
