/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import * as s from './styles';
import MobileLogo from "../../../../images/mobile/mobileLogo.svg";
import MobileAlarm from '../../../../images/mobile/mobileAlarm.svg';
import MobileEllipsis from '../../../../images/mobile/ellipsis.svg';


const  MoHeaderComponent =({onToggle}:any) => {
  return(<>
    <s.MobileHeader>
        <img css={s.LogoCenter} src={MobileLogo} alt="mobile-logo"></img>
      <s.OtherWrapper>
        <img src={MobileAlarm} alt="mobile-alarm"></img>
        <img onClick={onToggle} src={MobileEllipsis} alt="mobile-ellipsis"></img>
      </s.OtherWrapper>
    </s.MobileHeader>

    </>)
};

export default MoHeaderComponent;