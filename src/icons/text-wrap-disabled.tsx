"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6l10 0"}],["path",{"d":"M4 18l10 0"}],["path",{"d":"M4 12h17l-3 -3m0 6l3 -3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12.5,12],"d":[2.4,0],"st":0.06}];

export const TextWrapDisabledIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextWrapDisabledIcon.displayName = "TextWrapDisabledIcon";
