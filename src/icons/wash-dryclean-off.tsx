"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.048 16.033a9 9 0 0 0 -12.094 -12.075m-2.321 1.682a9 9 0 0 0 12.733 12.723"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.08}];

export const WashDrycleanOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WashDrycleanOffIcon.displayName = "WashDrycleanOffIcon";
