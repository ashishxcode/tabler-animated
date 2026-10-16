"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 7a4 4 0 0 1 4 4v9a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-9a4 4 0 0 1 4 -4"}],["path",{"d":"M9 16h6"}],["path",{"d":"M12 7v-3"}],["path",{"d":"M16 5l-4 -1l4 -1"}],["path",{"d":"M12 4h-3a3 3 0 0 0 -3 3"}]];
const rig: Rig[] = [{"fx":"flicker","n":[0,1,2,3,4],"o":[11,21]}];

export const FireExtinguisherIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FireExtinguisherIcon.displayName = "FireExtinguisherIcon";
