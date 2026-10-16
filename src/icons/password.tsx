"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 10v4"}],["path",{"d":"M10 13l4 -2"}],["path",{"d":"M10 11l4 2"}],["path",{"d":"M5 10v4"}],["path",{"d":"M3 13l4 -2"}],["path",{"d":"M3 11l4 2"}],["path",{"d":"M19 10v4"}],["path",{"d":"M17 13l4 -2"}],["path",{"d":"M17 11l4 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8],"o":[12,12],"a":0.06}];

export const PasswordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PasswordIcon.displayName = "PasswordIcon";
