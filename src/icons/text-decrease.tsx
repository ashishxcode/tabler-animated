"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19v-10.5a3.5 3.5 0 1 1 7 0v10.5"}],["path",{"d":"M4 13h7"}],["path",{"d":"M21 12h-6"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2],"o":[12.5,12],"d":[2.4,0],"st":0.06}];

export const TextDecreaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TextDecreaseIcon.displayName = "TextDecreaseIcon";
