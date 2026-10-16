"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 16v-8"}],["path",{"d":"M11 8v8"}],["path",{"d":"M7 12h4"}],["path",{"d":"M14 12h4"}],["path",{"d":"M16 10v4"}]];
const rig: Rig[] = [{"fx":"wave","n":[2,3,4],"st":0.13,"os":[[9,12],[16,12],[16,12]]}];

export const SignalHPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SignalHPlusIcon.displayName = "SignalHPlusIcon";
