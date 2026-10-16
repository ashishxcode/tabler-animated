"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12v8.5a1.5 1.5 0 0 0 3 0v-7.5"}],["path",{"d":"M11 13.5v2a1.5 1.5 0 0 0 3 0v-2.5"}],["path",{"d":"M14 14.5a1.5 1.5 0 0 0 3 0v-1.5"}],["path",{"d":"M17 13.5a1.5 1.5 0 0 0 3 0v-4.5a6 6 0 0 0 -6 -6h-2h.208a6 6 0 0 0 -5.012 2.7l-.196 .3q -.468 .718 -3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734 .44 1.674 .325 2.28 -.28l1.47 -1.47"}]];
const rig: Rig[] = [{"fx":"tap","n":[0,1,2,3],"o":[11.76,22]}];

export const HandFingerDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HandFingerDownIcon.displayName = "HandFingerDownIcon";
