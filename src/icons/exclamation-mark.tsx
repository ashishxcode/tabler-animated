"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 19v.01"}],["path",{"d":"M12 15v-10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,19.01],"a":0.4,"dl":0.12},{"fx":"pop","n":[1],"o":[12,10],"a":0.05}];

export const ExclamationMarkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExclamationMarkIcon.displayName = "ExclamationMarkIcon";
