"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h-3v16h3"}],["path",{"d":"M16 4h3v16h-3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[6.5,12],"d":[-1.8,0]},{"fx":"nudge","n":[1],"o":[17.5,12],"d":[1.8,0]}];

export const BracketsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BracketsIcon.displayName = "BracketsIcon";
