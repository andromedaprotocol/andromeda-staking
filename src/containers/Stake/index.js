import React, { useState } from "react";
import { DisplayText } from "@andromedaprotocol/react";
import NavBar from "../NavBar";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import variables from "../../utils/variables";
import "./index.css";
import Table from "./Table";
import DelegateDialog from "./DelegateDialog";
import SuccessDialog from "./DelegateDialog/SuccessDialog";
import UnSuccessDialog from "./DelegateDialog/UnSuccessDialog";
import PendingDialog from "./DelegateDialog/PendingDialog";

const Stake = (props) => {
  const [active, setActive] = useState(1);

  const handleChange = (value) => {
    if (active === value) {
      return;
    }

    setActive(value);
  };

  return (
    <div className="stake">
      <NavBar stake={true} />
      <div className="stake_content padding">
        <div className="heading">
          <div className="tabs">
            <DisplayText
              className={active === 1 ? "active" : ""}
              onClick={() => handleChange(1)}
              size="xs"
            >
              {variables[props.lang]["all_validators"]}
            </DisplayText>
            <span />
            <DisplayText
              className={active === 2 ? "active" : ""}
              onClick={() => handleChange(2)}
              size="xs"
            >
              {variables[props.lang]["staked_validators"]}
            </DisplayText>
          </div>
        </div>
        <Table active={active} />
      </div>
      <DelegateDialog />
      <SuccessDialog />
      <UnSuccessDialog />
      <PendingDialog />
    </div>
  );
};

Stake.propTypes = {
  lang: PropTypes.string.isRequired,
};

const stateToProps = (state) => {
  return {
    lang: state.language,
  };
};

export default connect(stateToProps)(Stake);
