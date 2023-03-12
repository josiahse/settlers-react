/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlayersCreateFormInputValues = {
    game_id?: string;
    player_name?: string;
    player_color?: string;
    seat_number?: number;
};
export declare type PlayersCreateFormValidationValues = {
    game_id?: ValidationFunction<string>;
    player_name?: ValidationFunction<string>;
    player_color?: ValidationFunction<string>;
    seat_number?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlayersCreateFormOverridesProps = {
    PlayersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    game_id?: PrimitiveOverrideProps<TextFieldProps>;
    player_name?: PrimitiveOverrideProps<TextFieldProps>;
    player_color?: PrimitiveOverrideProps<TextFieldProps>;
    seat_number?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlayersCreateFormProps = React.PropsWithChildren<{
    overrides?: PlayersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onSuccess?: (fields: PlayersCreateFormInputValues) => void;
    onError?: (fields: PlayersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlayersCreateFormInputValues) => PlayersCreateFormInputValues;
    onValidate?: PlayersCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlayersCreateForm(props: PlayersCreateFormProps): React.ReactElement;
