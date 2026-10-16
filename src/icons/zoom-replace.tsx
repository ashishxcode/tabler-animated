"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M3.291 8a7 7 0 0 1 5.077 -4.806a7.021 7.021 0 0 1 8.242 4.403"}],["path",{"d":"M17 4v4h-4"}],["path",{"d":"M16.705 12a7 7 0 0 1 -5.074 4.798a7.021 7.021 0 0 1 -8.241 -4.403"}],["path",{"d":"M3 16v-4h4"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4],"o":[12,12],"a":360}];

export const ZoomReplaceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZoomReplaceIcon.displayName = "ZoomReplaceIcon";
