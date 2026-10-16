"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.536 15.029a4.987 4.987 0 0 1 -1.536 -1.029a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5"}],["path",{"d":"M5 21v-7"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"swing","n":[0,1],"o":[12,4.57],"a":7}];

export const FlagPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FlagPauseIcon.displayName = "FlagPauseIcon";
