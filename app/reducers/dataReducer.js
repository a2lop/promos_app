import { constants } from '../utils/constants'
import { concat } from 'lodash'

import { GET_OFFERS } from '../actions/actionTypes'

let initialState = {
    homeOffers: [
        {
            id: '3azXhVnKv4WKQlAfp5b9',
            title: '2x1',
            days: {
                th: false,
                mo: true,
                su: true,
                sa: false,
                tu: false,
                we: true,
                fr: true
            },
            memberships: ['wY5maOuicbGXgQh8zkNz'],
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_3azXhVnKv4WKQlAfp5b9?alt=media&token=0ec4c86a-6010-49eb-9ecf-ce32b46ae44f',
            description: 'Description test',
            logoList:
                'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_56897883-e1539293036268.jpeg?auto=format&q=60&fit=max&w=930',
            categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH']
        },
        {
            id: 'NXypz810iGKvHTi2jQL7',
            logoList:
                'https://thinkadnet.com/wp-content/uploads/2018/09/Office-365-Logo-Square.png',
            title: 'Pofeki ikiped milcepza ralar bur.',
            days: {
                th: false,
                mo: true,
                su: false,
                sa: false,
                tu: false,
                we: false,
                fr: false
            },
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://thinkadnet.com/wp-content/uploads/2018/09/Office-365-Logo-Square.png',
            description:
                'Judcu pazdok fosow govafcen da okubuvi bura igufap tuw edhi vuuhova uj buwahude tefi puw irjakel voptuk waroefe. Gef riv coljahga tohaova jit egenub is eh ucobi ofuronin vo cilnugin gabgu ejuote ve ode awapo ke.'
        },
        {
            id: 'g6lmoLQMbB3armq49w1c',
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_g6lmoLQMbB3armq49w1c?alt=media&token=cdba9c45-a786-44f8-9898-ae7d2965d6c6',
            description: 'Description test',
            logoList:
                'https://media.glassdoor.com/sqll/575263/uber-squarelogo-1479168719438.png',
            categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH'],
            title: '2x1',
            days: {
                sa: false,
                tu: false,
                we: true,
                fr: true,
                th: false,
                su: true,
                mo: true
            },
            memberships: ['wY5maOuicbGXgQh8zkNz']
        },
        {
            id: '3azXhVnKv4WKQlAfp5b9',
            title: '2x1',
            days: {
                th: false,
                mo: true,
                su: true,
                sa: false,
                tu: false,
                we: true,
                fr: true
            },
            memberships: ['wY5maOuicbGXgQh8zkNz'],
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_3azXhVnKv4WKQlAfp5b9?alt=media&token=0ec4c86a-6010-49eb-9ecf-ce32b46ae44f',
            description: 'Description test',
            logoList:
                'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_56897883-e1539293036268.jpeg?auto=format&q=60&fit=max&w=930',
            categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH']
        },
        {
            id: 'NXypz810iGKvHTi2jQL7',
            logoList:
                'https://thinkadnet.com/wp-content/uploads/2018/09/Office-365-Logo-Square.png',
            title: 'Pofeki ikiped milcepza ralar bur.',
            days: {
                th: false,
                mo: true,
                su: false,
                sa: false,
                tu: false,
                we: false,
                fr: false
            },
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://thinkadnet.com/wp-content/uploads/2018/09/Office-365-Logo-Square.png',
            description:
                'Judcu pazdok fosow govafcen da okubuvi bura igufap tuw edhi vuuhova uj buwahude tefi puw irjakel voptuk waroefe. Gef riv coljahga tohaova jit egenub is eh ucobi ofuronin vo cilnugin gabgu ejuote ve ode awapo ke.'
        },
        {
            id: 'g6lmoLQMbB3armq49w1c',
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_g6lmoLQMbB3armq49w1c?alt=media&token=cdba9c45-a786-44f8-9898-ae7d2965d6c6',
            description: 'Description test',
            logoList:
                'https://media.glassdoor.com/sqll/575263/uber-squarelogo-1479168719438.png',
            categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH'],
            title: '2x1',
            days: {
                sa: false,
                tu: false,
                we: true,
                fr: true,
                th: false,
                su: true,
                mo: true
            },
            memberships: ['wY5maOuicbGXgQh8zkNz']
        },
        {
            id: '3azXhVnKv4WKQlAfp5b9',
            title: '2x1',
            days: {
                th: false,
                mo: true,
                su: true,
                sa: false,
                tu: false,
                we: true,
                fr: true
            },
            memberships: ['wY5maOuicbGXgQh8zkNz'],
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_3azXhVnKv4WKQlAfp5b9?alt=media&token=0ec4c86a-6010-49eb-9ecf-ce32b46ae44f',
            description: 'Description test',
            logoList:
                'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_56897883-e1539293036268.jpeg?auto=format&q=60&fit=max&w=930',
            categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH']
        },
        {
            id: 'NXypz810iGKvHTi2jQL7',
            logoList:
                'https://thinkadnet.com/wp-content/uploads/2018/09/Office-365-Logo-Square.png',
            title: 'Pofeki ikiped milcepza ralar bur.',
            days: {
                th: false,
                mo: true,
                su: false,
                sa: false,
                tu: false,
                we: false,
                fr: false
            },
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://thinkadnet.com/wp-content/uploads/2018/09/Office-365-Logo-Square.png',
            description:
                'Judcu pazdok fosow govafcen da okubuvi bura igufap tuw edhi vuuhova uj buwahude tefi puw irjakel voptuk waroefe. Gef riv coljahga tohaova jit egenub is eh ucobi ofuronin vo cilnugin gabgu ejuote ve ode awapo ke.'
        },
        {
            id: 'g6lmoLQMbB3armq49w1c',
            establishment: { id: 'pDRPr1DMp0fBrLCQuZN5', name: 'Campo 4' },
            logoBanner:
                'https://firebasestorage.googleapis.com/v0/b/promos-233704.appspot.com/o/offers%2Fbanner_g6lmoLQMbB3armq49w1c?alt=media&token=cdba9c45-a786-44f8-9898-ae7d2965d6c6',
            description: 'Description test',
            logoList:
                'https://media.glassdoor.com/sqll/575263/uber-squarelogo-1479168719438.png',
            categories: ['d18BtEvKiRnmMXvQN6oy', 'd3S7ldytKdg4NGpzE7BH'],
            title: '2x1',
            days: {
                sa: false,
                tu: false,
                we: true,
                fr: true,
                th: false,
                su: true,
                mo: true
            },
            memberships: ['wY5maOuicbGXgQh8zkNz']
        }
    ]
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_OFFERS:
            state = Object.assign({}, state, {
                homeOffers: action.payload.offers
            })
            return state

        default:
            return state
    }
}

export default dataReducer
