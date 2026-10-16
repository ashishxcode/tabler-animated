"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 8h-8.5a1.5 1.5 0 0 0 0 3h7.5"}],["path",{"d":"M10.5 11h-2a1.5 1.5 0 1 0 0 3h2.5"}],["path",{"d":"M9.5 14a1.5 1.5 0 0 0 0 3h1.5"}],["path",{"d":"M10.5 17a1.5 1.5 0 0 0 0 3h4.5a6 6 0 0 0 6 -6v-2v.208a6 6 0 0 0 -2.7 -5.012l-.3 -.196q -.718 -.468 -5.728 -3.286a1.5 1.5 0 0 0 -2.022 .536a1.87 1.87 0 0 0 .28 2.28l1.47 1.47"}]];
const rig: Rig[] = [{"fx":"tap","n":[0,1,2,3],"o":[11.5,20]}];

export const HandFingerLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HandFingerLeftIcon.displayName = "HandFingerLeftIcon";
