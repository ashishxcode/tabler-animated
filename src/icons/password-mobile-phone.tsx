"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 17v4"}],["path",{"d":"M10 20l4 -2"}],["path",{"d":"M10 18l4 2"}],["path",{"d":"M5 17v4"}],["path",{"d":"M3 20l4 -2"}],["path",{"d":"M3 18l4 2"}],["path",{"d":"M19 17v4"}],["path",{"d":"M17 20l4 -2"}],["path",{"d":"M17 18l4 2"}],["path",{"d":"M7 14v-8a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8"}],["path",{"d":"M11 5h2"}],["path",{"d":"M12 17v.01"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5,6,7,8,9,10,11],"o":[12,12.5],"a":-12}];

export const PasswordMobilePhoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PasswordMobilePhoneIcon.displayName = "PasswordMobilePhoneIcon";
