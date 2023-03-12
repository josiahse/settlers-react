/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Rolls } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RollsCreateForm(props) {
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
    turn_number: "",
    red_value: "",
    yellow_value: "",
    die_color: "",
  };
  const [game_id, setGame_id] = React.useState(initialValues.game_id);
  const [turn_number, setTurn_number] = React.useState(
    initialValues.turn_number
  );
  const [red_value, setRed_value] = React.useState(initialValues.red_value);
  const [yellow_value, setYellow_value] = React.useState(
    initialValues.yellow_value
  );
  const [die_color, setDie_color] = React.useState(initialValues.die_color);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGame_id(initialValues.game_id);
    setTurn_number(initialValues.turn_number);
    setRed_value(initialValues.red_value);
    setYellow_value(initialValues.yellow_value);
    setDie_color(initialValues.die_color);
    setErrors({});
  };
  const validations = {
    game_id: [{ type: "Required" }],
    turn_number: [{ type: "Required" }],
    red_value: [{ type: "Required" }],
    yellow_value: [{ type: "Required" }],
    die_color: [],
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
          turn_number,
          red_value,
          yellow_value,
          die_color,
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
          await DataStore.save(new Rolls(modelFields));
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
      {...getOverrideProps(overrides, "RollsCreateForm")}
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
              turn_number,
              red_value,
              yellow_value,
              die_color,
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
        label="Turn number"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={turn_number}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              game_id,
              turn_number: value,
              red_value,
              yellow_value,
              die_color,
            };
            const result = onChange(modelFields);
            value = result?.turn_number ?? value;
          }
          if (errors.turn_number?.hasError) {
            runValidationTasks("turn_number", value);
          }
          setTurn_number(value);
        }}
        onBlur={() => runValidationTasks("turn_number", turn_number)}
        errorMessage={errors.turn_number?.errorMessage}
        hasError={errors.turn_number?.hasError}
        {...getOverrideProps(overrides, "turn_number")}
      ></TextField>
      <TextField
        label="Red value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={red_value}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              game_id,
              turn_number,
              red_value: value,
              yellow_value,
              die_color,
            };
            const result = onChange(modelFields);
            value = result?.red_value ?? value;
          }
          if (errors.red_value?.hasError) {
            runValidationTasks("red_value", value);
          }
          setRed_value(value);
        }}
        onBlur={() => runValidationTasks("red_value", red_value)}
        errorMessage={errors.red_value?.errorMessage}
        hasError={errors.red_value?.hasError}
        {...getOverrideProps(overrides, "red_value")}
      ></TextField>
      <TextField
        label="Yellow value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={yellow_value}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              game_id,
              turn_number,
              red_value,
              yellow_value: value,
              die_color,
            };
            const result = onChange(modelFields);
            value = result?.yellow_value ?? value;
          }
          if (errors.yellow_value?.hasError) {
            runValidationTasks("yellow_value", value);
          }
          setYellow_value(value);
        }}
        onBlur={() => runValidationTasks("yellow_value", yellow_value)}
        errorMessage={errors.yellow_value?.errorMessage}
        hasError={errors.yellow_value?.hasError}
        {...getOverrideProps(overrides, "yellow_value")}
      ></TextField>
      <TextField
        label="Die color"
        isRequired={false}
        isReadOnly={false}
        value={die_color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              game_id,
              turn_number,
              red_value,
              yellow_value,
              die_color: value,
            };
            const result = onChange(modelFields);
            value = result?.die_color ?? value;
          }
          if (errors.die_color?.hasError) {
            runValidationTasks("die_color", value);
          }
          setDie_color(value);
        }}
        onBlur={() => runValidationTasks("die_color", die_color)}
        errorMessage={errors.die_color?.errorMessage}
        hasError={errors.die_color?.hasError}
        {...getOverrideProps(overrides, "die_color")}
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
