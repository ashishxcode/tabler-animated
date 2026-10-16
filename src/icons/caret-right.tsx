"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 18l6 -6l-6 -6v12"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[13,12],"d":[1.92,0]}];

export const CaretRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CaretRightIcon.displayName = "CaretRightIcon";
