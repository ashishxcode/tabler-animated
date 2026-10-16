"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488"}],["path",{"d":"M7 14h5m2.9 0h2.1"}],["path",{"d":"M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.1}];

export const BrandAppstoreIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandAppstoreIcon.displayName = "BrandAppstoreIcon";
