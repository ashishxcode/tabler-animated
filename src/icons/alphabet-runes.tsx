"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 18v-12"}],["path",{"d":"M13 6l4 4l4 -4"}],["path",{"d":"M11 18l-7 -8l4 -4l4 4l-7 8"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[17,8],"st":0.07},{"fx":"pop","n":[0,2],"o":[10.5,12],"a":0.04}];

export const AlphabetRunesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetRunesIcon.displayName = "AlphabetRunesIcon";
