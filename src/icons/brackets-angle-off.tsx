"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h.01"}],["path",{"d":"M6.453 6.474l-3.453 5.526l5 8"}],["path",{"d":"M16 4l5 8l-1.917 3.067"}],["path",{"d":"M17.535 17.544l-1.535 2.456"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[16.77,18.77],"a":0.35,"dl":0.2},{"fx":"nudge","n":[0,1],"o":[5.51,12],"d":[-1.8,0]},{"fx":"nudge","n":[2],"o":[18.5,9.53],"d":[1.8,0]}];

export const BracketsAngleOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsAngleOffIcon.displayName = "BracketsAngleOffIcon";
