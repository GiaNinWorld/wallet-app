import theme from '../../styles/theme';

interface IButtonStyle {
    button: {
        backgroundColor: string;
        borderWidth?: number;
        borderColor?: string;
    },
    title: {
        color: string;
        fontFamily?: string;
        fontSize: number;
    };
    icon: {
        color: string;
        size?: number;
    };
};

export interface ButtonVariant {
    enabled: IButtonStyle;
    disabled: IButtonStyle;
};

const buttonPrimary: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.GREEN1,
        },
        title: {
            color: theme.COLORS.WHITE,
            fontSize: 25,
            fontFamily: theme.FONTS.URBANIST_MEDIUM
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
            fontSize: 18,
            fontFamily: theme.FONTS.URBANIST_MEDIUM
        },
        icon: {
            color: theme.COLORS.WHITE,
        },
    },
};


const buttonOutline: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.COLORS.GREEN1,
        },
        title: {
            color: theme.COLORS.GRAY1,
            fontSize: 18,
            fontFamily: theme.FONTS.URBANIST_MEDIUM,
        },
        icon: {
            color: theme.COLORS.GRAY1,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
            borderWidth: 2,
            borderColor: theme.COLORS.GREEN1,
        },
        title: {
            color: theme.COLORS.GRAY_100,
            fontSize: 18,
            fontFamily: theme.FONTS.URBANIST_MEDIUM
        },
        icon: {
            color: theme.COLORS.GRAY_100,
        }
    },
};

const buttonBlack: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: theme.COLORS.TEXTDARK,
        },
        title: {
            color: theme.COLORS.WHITE_100,
            fontSize: 18,
            fontFamily: theme.FONTS.URBANIST_MEDIUM
        },
        icon: {
            color: theme.COLORS.WHITE_100,
        }
    },
    disabled: {
        button: {
            backgroundColor: theme.COLORS.GRAY_100,
        },
        title: {
            color: theme.COLORS.WHITE,
            fontSize: 18,
            fontFamily: theme.FONTS.URBANIST_MEDIUM
        },
        icon: {
            color: theme.COLORS.WHITE,
        }
    },
};

const buttonTransparent: ButtonVariant = {
    enabled: {
        button: {
            backgroundColor: 'transparent',
        },
        title: {
            fontSize: 18,
            color: theme.COLORS.GRAY3,
            fontFamily: theme.FONTS.URBANIST_MEDIUM,
        },
        icon: {
            color: theme.COLORS.GRAY3,
        }
    },
    disabled: {
        button: {
            backgroundColor: 'transparent',
        },
        title: {
            fontSize: 18,
            color: theme.COLORS.GRAY3,
            fontFamily: theme.FONTS.URBANIST_MEDIUM,
        },
        icon: {
            color: theme.COLORS.GRAY3,
        }
    },
};

export const variants = {
    primary: buttonPrimary,
    outline: buttonOutline,
    black: buttonBlack,
    transparent: buttonTransparent,
};
