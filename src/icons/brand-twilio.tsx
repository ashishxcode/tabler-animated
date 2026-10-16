"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0"}],["path",{"d":"M8 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.1}];

export const BrandTwilioIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandTwilioIcon.displayName = "BrandTwilioIcon";
