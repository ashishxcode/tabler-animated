"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 8h.01"}],["path",{"d":"M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644"}],["path",{"d":"M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644"}],["path",{"d":"M3 7v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M3 17v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 21h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,3,4,5,6],"o":[12,12],"a":0.35,"dl":0.12},{"fx":"tilt","n":[1],"o":[10,12],"a":-3}];

export const PhotoScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PhotoScanIcon.displayName = "PhotoScanIcon";
