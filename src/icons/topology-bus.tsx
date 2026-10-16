"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0"}],["path",{"d":"M2 16h20"}],["path",{"d":"M4 12v4"}],["path",{"d":"M12 12v4"}],["path",{"d":"M20 12v4"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12,12],"d":[2.4,0]}];

export const TopologyBusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TopologyBusIcon.displayName = "TopologyBusIcon";
