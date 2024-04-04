import { Dimensions, Platform } from 'react-native';

export default {

    BODY_OPTIONS: ["Slim/Skinny", "Average Build", "Athletic/Fit", "Mom/Dad Body", "Curvy/Husky", "Overweight"],
    HEIGHT_OPTIONS: ["4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", "5'0", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", "6'0", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", "7'0", "7'1", "7'2", "7'3", "7'4", "7'5"],
    DRINK_OPTIONS: ["Never", "Occasionally", "Regularly", "Socially"],
    SMOKE_OPTIONS: ["Never", "Occasionally", "Regularly", "Socially"],
    EDUCATION_LEVEL_OPTIONS: ["High School", "Trade/Tech School", "Undergraduate Degree", "Graduate Degree", "Continuing Education/In School"],
    CONSIDER_MYSELF_OPTIONS: ["Apolitical", "Moderate", "Liberal", "Conservative"],
    IDEA_OF_FUN_OPTIONS: ["Dinner and a movie or show", "Cocktails and Dinner", "Goint to a concert or sporting event", "Netflix and Chill"],
    CULTURAL_BACKGROUND_OPTIONS: ["African American", "American Indian", "Asian", "Black", "Caribeean/Haitian", "Caucasian", "European", "Indian", "Hawaiian", "Latina/Hispanic", "Middle Eastern", "Mixed", "Other"],

    PREFERENCE_HOPING_TO_FIND_OPTIONS: ["A partner in crime/companion", "A long-term relationship", "A husband/wife", "I'm just checking things out"],
    PREFERENCE_LOOKING_FOR_OPTIONS: ['Male', 'Female', 'Both'],
    PREFERENCE_BODY_OPTIONS_OPTIONS: ["Slim/Skinny", "Average Build", "Athletic/Fit", "Mom/Dad Body", "Curvy/Husky", "Overweight", "I like them all"],
    PREFERENCE_SMOKE_OPTIONS: ["Doesn't smoke", "Smokes occasionally", "Smokes socially", "I don't have a preference"],

    PREFERENCE_SMOKE_OPTIONS_VALUE:["Never", "Occasionally", "Socially", "NoPreference"],
    
    PREFERENCE_DRINK_OPTIONS: ["Doesn't drink", "Drinks occasionally", "Drinks socially", "I don't have a preference"],
    
    PREFERENCE_DRINK_OPTIONS_VALUE:["Never", "Occasionally", "Socially", "NoPreference"],

    PREFERENCE_EDUCATION_LEVEL_OPTIONS: ["High School", "Trade/Tech School", "Undergraduate Degree", "Graduate Degree", "Continuing Education/In School"],
    PREFERENCE_POLITICAL_OPTIONS: ["Apolitical", "Moderate", "Liberal", "Conservative"],
    PREFERENCE_CULTURAL_BACKGROUND_OPTIONS: ["African American", "American Indian", "Asian", "Black", "Caribeean/Haitian", "Caucasian", "European", "Indian", "Hawaiian", "Latina/Hispanic", "Middle Eastern", "Mixed", "I like them all"],
    REPORT_ISSUE_SUBJECT:["APP bug","Non-Conference"],
    KEY: {
        CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
        USER: 'mobile_user',
        PASSWORD: 'choreobook'
    },

    SERVER: {
        // URL: Platform.OS == 'ios' ? 'http://localhost/' : 'http://10.0.3.2/',
        URL: 'http://44.233.147.83/'
        // URL : 'http://192.168.118.138/'
    },

    ANIMATION: {
        DURATION: 2000
        // DURATION: 500,
    },

    productSkus: {
        ...Platform.select({
            ios: [
                'ios.test.purchased-1',
                'ios.test.purchased-2',
                'ios.test.purchased-3',
                'ios.test.purchased-4',
                'ios.test.purchased-5'
            ],
            android: [
                'android.test.purchased-1',
                'android.test.purchased-2',
                'android.test.purchased-3',
                'android.test.purchased-4',
                'android.test.purchased-5',
            ],
        })
    },
    subscriptionSkus: {
        ...Platform.select({
            ios: [
                'ios.test.subscription-1',
                'ios.test.subscription-2',
                'ios.test.subscription-3',
            ],
            android: [
                'android.test.subscription-1',
                'android.test.subscription-2',
                'android.test.subscription-3',
            ],
        })
    },

    LAYOUT: {
        SCREEN_WIDTH: Dimensions.get('window').width,
        SCREEN_HEIGHT: Dimensions.get('window').height,
        BOTTOM_BAR_HEIGHT: 80,
        HEADER_BAR_HEIGHT: 32,
    },

    COLOR: {
        PRIMARY: '#EA1263',
        BackColor:'#1D1617',
        WHITE:'#ffffff',
        GREY:'#7B6F72',
        GREY1:'#ADA4A5',
        GREY2:'#DDDADA',
        BORDERCOLOR:'#F7F8F8'
    },

    FONT_FAMILY: {
        ...Platform.select({
            ios: {
                PRIMARY_REGULAR: 'Poppins-Regular',
                PRIMARY_MEDIUM: 'Poppins-Medium',
                PRIMARY_SEMI: 'Poppins-SemiBold',
                PRIMARY_BOLD: 'Poppins-Bold',
            },
            android: {
                PRIMARY_REGULAR: 'Poppins-Regular',
                PRIMARY_MEDIUM: 'Poppins-Medium',
                PRIMARY_SEMI: 'Poppins-SemiBold',
                PRIMARY_BOLD: 'Poppins-Bold',
            },
        })
    },

    FONT_SIZE: {
        FT10: Dimensions.get('window').width <= 375 ? 10 : 10,
        FT11: Dimensions.get('window').width <= 375 ? 11 : 11,
        FT12: Dimensions.get('window').width <= 375 ? 12 : 12,
        FT13: Dimensions.get('window').width <= 375 ? 13 : 13,
        FT14: Dimensions.get('window').width <= 375 ? 14 : 14,
        FT16: Dimensions.get('window').width <= 375 ? 16 : 16,
        FT18: Dimensions.get('window').width <= 375 ? 18 : 18,
        FT17: Dimensions.get('window').width <= 375 ? 17 : 17,
        FT20: Dimensions.get('window').width <= 375 ? 20 : 20,
        FT22: Dimensions.get('window').width <= 375 ? 22 : 22,
        FT24: Dimensions.get('window').width <= 375 ? 24 : 24,
        FT25: Dimensions.get('window').width <= 375 ? 25 : 25,
        FT26: Dimensions.get('window').width <= 375 ? 26 : 26,
        FT28: Dimensions.get('window').width <= 375 ? 28 : 28,
        FT30: Dimensions.get('window').width <= 375 ? 30 : 30,
        FT32: Dimensions.get('window').width <= 375 ? 32 : 32,
        FT34: Dimensions.get('window').width <= 375 ? 34 : 34,
        FT36: Dimensions.get('window').width <= 375 ? 36 : 36,
        FT38: Dimensions.get('window').width <= 375 ? 38 : 38,
        FT40: Dimensions.get('window').width <= 375 ? 40 : 40,
        FT48: Dimensions.get('window').width <= 375 ? 48 : 48,
        FT64: Dimensions.get('window').width <= 375 ? 64 : 64,

    }

}