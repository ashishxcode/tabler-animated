"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18l.01 0"}],["path",{"d":"M9.172 15.172a4 4 0 0 1 5.656 0"}],["path",{"d":"M6.343 12.343a8 8 0 0 1 11.314 0"}],["path",{"d":"M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2],"st":0.13,"os":[[12.01,18],[12,14.59],[12,11.17]]}];

export const WifiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WifiIcon.displayName = "WifiIcon";
