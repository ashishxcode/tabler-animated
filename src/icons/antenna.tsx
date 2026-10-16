"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4v8"}],["path",{"d":"M16 4.5v7"}],["path",{"d":"M12 5v16"}],["path",{"d":"M8 5.5v5"}],["path",{"d":"M4 6v4"}],["path",{"d":"M20 8h-16"}]];
const rig: Rig[] = [{"fx":"wave","n":[4,3,1,0],"st":0.13,"os":[[4,8],[8,8],[16,8],[20,8]]}];

export const AntennaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaIcon.displayName = "AntennaIcon";
