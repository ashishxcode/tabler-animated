"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4l-5 8l5 8"}],["path",{"d":"M16 4l5 8l-5 8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[5.5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1],"o":[18.5,12],"d":[1.8,0]}];

export const BracketsAngleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsAngleIcon.displayName = "BracketsAngleIcon";
