"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13.533 15.028a4.988 4.988 0 0 1 -1.533 -1.028a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5"}],["path",{"d":"M5 21v-7"}],["path",{"d":"M22 22l-5 -5"}],["path",{"d":"M17 22l5 -5"}]];
const rig: Rig[] = [{"fx":"draw","n":[2,3],"o":[19.5,19.5],"dl":0.2,"st":0.08},{"fx":"swing","n":[0,1],"o":[12,4.57],"a":7}];

export const FlagXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FlagXIcon.displayName = "FlagXIcon";
