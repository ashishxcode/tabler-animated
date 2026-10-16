"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M12 8l0 13"}],["path",{"d":"M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"}],["path",{"d":"M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5"}]];
const rig: Rig[] = [{"fx":"lift","n":[3],"o":[5,5.5],"a":-6,"d":[0,-1.6]}];

export const GiftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GiftIcon.displayName = "GiftIcon";
