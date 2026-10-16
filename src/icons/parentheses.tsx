"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 4a12.25 12.25 0 0 0 0 16"}],["path",{"d":"M17 4a12.25 12.25 0 0 1 0 16"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[5.51,12],"d":[-1.8,0]},{"fx":"nudge","n":[1],"o":[18.49,12],"d":[1.8,0]}];

export const ParenthesesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ParenthesesIcon.displayName = "ParenthesesIcon";
