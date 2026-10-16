"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 20l14 0"}],["path",{"d":"M5 17h5v-.3a7 7 0 1 1 4 0v.3h5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,10],"a":0.08},{"fx":"pop","n":[0],"o":[12,20],"a":0.22,"dl":0.1}];

export const ZodiacLibraIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacLibraIcon.displayName = "ZodiacLibraIcon";
