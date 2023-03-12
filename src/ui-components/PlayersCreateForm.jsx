/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Players } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PlayersCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    game_id: "",
    player_name: "",
    player_color: "",
    seat_number: "",
  };
  const [game_id, setGame_id] = React.useState(initialValues.game_id);
  const [player_name, setPlayer_name] = React.useState(
    initialValues.player_name
  );
  const [player_color, setPlayer_color] = React.useState(
    initialValues.player_color
  );
  const [seat_number, setSeat_number] = React.useState(
    initialValues.seat_number
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGame_id(initialValues.game_id);
    setPlayer_name(initialValues.player_name);
    setPlayer_color(initialValues.player_color);
    setSeat_number(initialValues.seat_number);
    setErrors({});
  };
  const validations = {
    game_id: [{ type: "Required" }],
    player_name: [{ type: "Required" }],
    player_color: [{ type: "Required" }],
    seat_number: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          game_id,
          player_name,
          player_color,
          seat_number,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Players(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayersCreateForm")}
      {...rest}
    >
      <TextField
        label="Game id"
        isRequired={true}
        isReadOnly={false}
        value={game_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id: value,
              player_name,
              player_color,
              seat_number,
            };
            const result = onChange(modelFields);
            value = result?.game_id ?? value;
          }
          if (errors.game_id?.hasError) {
            runValidationTasks("game_id", value);
          }
          setGame_id(value);
        }}
        onBlur={() => runValidationTasks("game_id", game_id)}
        errorMessage={errors.game_id?.errorMessage}
        hasError={errors.game_id?.hasError}
        {...getOverrideProps(overrides, "game_id")}
      ></TextField>
      <TextField
        label="Player name"
        isRequired={true}
        isReadOnly={false}
        value={player_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id,
              player_name: value,
              player_color,
              seat_number,
            };
            const result = onChange(modelFields);
            value = result?.player_name ?? value;
          }
          if (errors.player_name?.hasError) {
            runValidationTasks("player_name", value);
          }
          setPlayer_name(value);
        }}
        onBlur={() => runValidationTasks("player_name", player_name)}
        errorMessage={errors.player_name?.errorMessage}
        hasError={errors.player_name?.hasError}
        {...getOverrideProps(overrides, "player_name")}
      ></TextField>
      <TextField
        label="Player color"
        isRequired={true}
        isReadOnly={false}
        value={player_color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id,
              player_name,
              player_color: value,
              seat_number,
            };
            const result = onChange(modelFields);
            value = result?.player_color ?? value;
          }
          if (errors.player_color?.hasError) {
            runValidationTasks("player_color", value);
          }
          setPlayer_color(value);
        }}
        onBlur={() => runValidationTasks("player_color", player_color)}
        errorMessage={errors.player_color?.errorMessage}
        hasError={errors.player_color?.hasError}
        {...getOverrideProps(overrides, "player_color")}
      ></TextField>
      <TextField
        label="Seat number"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={seat_number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              game_id,
              player_name,
              player_color,
              seat_number: value,
            };
            const result = onChange(modelFields);
            value = result?.seat_number ?? value;
          }
          if (errors.seat_number?.hasError) {
            runValidationTasks("seat_number", value);
          }
          setSeat_number(value);
        }}
        onBlur={() => runValidationTasks("seat_number", seat_number)}
        errorMessage={errors.seat_number?.errorMessage}
        hasError={errors.seat_number?.hasError}
        {...getOverrideProps(overrides, "seat_number")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
