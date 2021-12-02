/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * HCA Data Portal site search input component.
 */

// Core dependencies
import React, {
  FC,
  FocusEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

// App dependencies
import { ToggleSearchBarFn } from "../siteSearchBar/siteSearchBar";
import SiteSearchInputClear from "../siteSearchInputClear/siteSearchInputClear";
import SiteSearchInputIcon from "../siteSearchInputIcon/siteSearchInputIcon";

// Styles
import { input } from "./siteSearchInput.module.css";

interface Props {
  searchBarOpen: boolean;
  searchTerms: string;
  toggleSearchBar: ToggleSearchBarFn;
}

const SiteSearchInput: FC<Props> = ({
  searchBarOpen,
  searchTerms,
  toggleSearchBar,
}): JSX.Element => {
  const refInput = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>(searchTerms);
  const showClearButton = !!inputValue && searchBarOpen;

  /**
   * On keydown event "escape", the input element will blur.
   */
  const onHandleKeyDown = useCallback(
    (keyEvent: KeyboardEvent): void => {
      if (searchBarOpen && keyEvent.key === "Escape") {
        if (refInput.current) {
          refInput.current.blur();
        }
      }
    },
    [searchBarOpen]
  );

  /**
   * On focus event (blur), if the clear button was clicked:
   * - the input value is cleared, and
   * - the input element will re-focus.
   * Otherwise, the blur event will proceed as expected and the search bar is closed.
   * @param focusEvent
   * @param toggleSearchBar
   */
  const onInputBlur = (
    focusEvent: FocusEvent<HTMLInputElement>,
    toggleSearchBar: ToggleSearchBarFn
  ): void => {
    const { currentTarget, relatedTarget } = focusEvent;
    const { parentNode: formEl } = currentTarget;
    const clearButtonClicked = formEl?.contains(relatedTarget);

    if (clearButtonClicked) {
      /* Clear value and maintain <input> focus. */
      if (refInput.current) {
        setInputValue("");
        refInput.current.value = "";
        refInput.current.focus();
      }
    } else {
      /* Close search bar. */
      toggleSearchBar(false);
    }
  };

  /**
   * Adds and removes event listener - "keydown".
   */
  useEffect((): (() => void) => {
    document.addEventListener("keydown", onHandleKeyDown);
    return () => {
      document.removeEventListener("keydown", onHandleKeyDown);
    };
  }, [onHandleKeyDown]);

  /**
   * Updates input blur/focus.
   * Executes with any changes to:
   * - search bar.
   */
  useEffect((): void => {
    if (!searchBarOpen) {
      /* Search bar is closed; blur input. */
      refInput.current?.blur();
    } else {
      /* Search bar is open; focus input. */
      refInput.current?.focus();
    }
  }, [searchBarOpen]);

  return (
    <>
      <SiteSearchInputIcon />
      <input
        className={input}
        defaultValue={searchTerms}
        onBlur={(focusEvent) => onInputBlur(focusEvent, toggleSearchBar)}
        onChange={(changeEvent) => setInputValue(changeEvent.target.value)}
        onFocus={() => toggleSearchBar(true)}
        name={"siteSearch"}
        placeholder={"Search all content"}
        ref={refInput}
        spellCheck="false"
        type="text"
      />
      <SiteSearchInputClear showClearButton={showClearButton} />
    </>
  );
};

export default SiteSearchInput;
