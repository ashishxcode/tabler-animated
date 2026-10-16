"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"}],["path",{"d":"M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"}],["path",{"d":"M12 11v2a14 14 0 0 0 2.5 8"}],["path",{"d":"M8 15a18 18 0 0 0 1.8 6"}],["path",{"d":"M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12.39,11.99],"st":0.07}];

export const FingerprintIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FingerprintIcon.displayName = "FingerprintIcon";
