"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18v-3"}],["path",{"d":"M10 18v-6"}],["path",{"d":"M14 18v-4"}],["path",{"d":"M14 10v-1"}],["path",{"d":"M18 14v-8"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[14,16],"a":0.35,"dl":0.2},{"fx":"wave","n":[3,0,1,4],"st":0.13,"os":[[14,9.5],[6,16.5],[10,15],[18,10]]}];

export const AntennaBarsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaBarsOffIcon.displayName = "AntennaBarsOffIcon";
