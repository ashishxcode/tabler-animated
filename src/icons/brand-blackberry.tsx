"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M6 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M13 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M14 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M12 18a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M20 15a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}],["path",{"d":"M21 9a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6],"o":[11.75,12],"a":0.1}];

export const BrandBlackberryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrandBlackberryIcon.displayName = "BrandBlackberryIcon";
