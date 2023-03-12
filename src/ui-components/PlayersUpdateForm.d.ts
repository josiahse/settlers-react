/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Players } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayersUpdateFormInputValues = {
    game_id?: string;
    player_name?: string;
    player_color?: string;
    seat_number?: number;
};
export declare type PlayersUpdateFormValidationValues = {
    game_id?: ValidationFunction<string>;
    player_name?: ValidationFunction<string>;
    player_color?: ValidationFunction<string>;
    seat_number?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersUpdateFormOverridesProps = {
    PlayersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_id?: PrimitiveOverrideProps<TextFieldProps>;
    player_name?: PrimitiveOverrideProps<TextFieldProps>;
    player_color?: PrimitiveOverrideProps<TextFieldProps>;
    seat_number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayersUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlayersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    players?: Players;
    onSubmit?: (fields: PlayersUpdateFormInputValues) => PlayersUpdateFormInputValues;
    onSuccess?: (fields: PlayersUpdateFormInputValues) => void;
    onError?: (fields: PlayersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayersUpdateFormInputValues) => PlayersUpdateFormInputValues;
    onValidate?: PlayersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersUpdateForm(props: PlayersUpdateFormProps): React.ReactElement;
