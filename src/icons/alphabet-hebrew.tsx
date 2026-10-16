"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 6c2.333 5.143 6.611 6.857 9.333 12"}],["path",{"d":"M13.667 14c2.505 -1.5 2.666 -4.141 2.666 -5.333c0 -1.778 -.443 -2.667 -.443 -2.667"}],["path",{"d":"M7.485 18s-.485 -.905 -.485 -2.714c0 -1.172 .164 -3.722 2.641 -5.27"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[11.67,12],"st":0.07},{"fx":"pop","n":[0],"o":[11.67,12],"a":0.04}];

export const AlphabetHebrewIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlphabetHebrewIcon.displayName = "AlphabetHebrewIcon";
